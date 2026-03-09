import Image from "next/image";
import FinanceDataCard from "@/components/FinanceDataCard";
import { auth } from "@/auth";
import { db } from "@/db";
import { transactionTable } from "@/db/schema";
import { and, eq, sum } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  const userName = session?.user?.name ?? "user";
  const userImage = session?.user?.image ?? "/";
  const userId = session?.user?.id ?? redirect("/api/auth/signin");

  const transactionsTotal = await db
    .select({ value: sum(transactionTable.amount) })
    .from(transactionTable)
    .where(eq(transactionTable.userId, userId));
  const totalBalance = Number(transactionsTotal[0].value ?? 0);

  const transactionsExpense = await db
    .select({ value: sum(transactionTable.amount) })
    .from(transactionTable)
    .where(
      and(
        eq(transactionTable.userId, userId),
        eq(transactionTable.transactionType, "expense"),
      ),
    );
  const totalExpense = Number(transactionsExpense[0].value ?? 0);

  const transactionsIncome = await db
    .select({ value: sum(transactionTable.amount) })
    .from(transactionTable)
    .where(
      and(
        eq(transactionTable.userId, userId),
        eq(transactionTable.transactionType, "income"),
      ),
    );
  const totalIncome = Number(transactionsIncome[0].value ?? 0);
  return (
    <>
      {/* welcome back card */}
      <header className="flex gap-5 py-2.5 items-center">
        <Image
          className="w-10 h-10 border border-black rounded-full"
          src={userImage}
          alt="profile picture"
          height={100}
          width={100}
        />
        <p>
          Welcome back
          <br />
          <span>{userName}</span>
        </p>
      </header>
      {/* total balance card */}
      <section className="flex py-5 justify-center">
        <div
          id="total balance container"
          className="flex flex-col justify-center"
        >
          <p className="text-gray-400 text-center">total balance</p>
          <p className="text-indigo-600 text-4xl font-bold">
            {totalIncome > totalExpense ? "" : "-"} ${totalBalance}
          </p>
        </div>
      </section>
      {/* total income & expense card */}
      <section className="flex justify-around pt-5">
        {/* income */}
        <FinanceDataCard
          type="income"
          imagesrc="/globe.svg"
          amount={totalIncome}
          percent={0}
        />
        {/* expense */}
        <FinanceDataCard
          type="expense"
          imagesrc="/globe.svg"
          amount={totalExpense}
          percent={0}
        />
      </section>
    </>
  );
}
