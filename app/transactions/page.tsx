import Indexes from "@/actions";
import { auth } from "@/auth";
import TransactionCard from "@/components/TransactionCard";
import { db } from "@/db";
import { transactionTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function Transactions() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    redirect("api/auth/signin");
  }
  const transactions = await db
    .select()
    .from(transactionTable)
    .where(eq(transactionTable.userId, userId));

  console.log(transactions);
  return (
    <>
      <header className="py-2.5">
        {/* Page Title */}
        <span className="text-2xl font-bold">Transactions</span>
        <div className="flex items-center justify-center gap-5 pt-5">
          {/* Search Input */}
          <form action="" className="max-w-full w-[80%]">
            <input
              type="text"
              placeholder="Search"
              className="bg-white h-10 px-5 border-0 rounded-xl max-w-full w-full"
            />
          </form>
          <button className="bg-indigo-400 h-10 w-10 border-0 rounded-xl hover:bg-indigo-600 active:bg-indigo-600">
            +
          </button>
        </div>
      </header>
      <section>
        <Indexes />
      </section>
    </>
  );
}
