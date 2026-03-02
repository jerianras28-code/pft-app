import { redirect } from "next/navigation";
import { auth } from "./auth";
import { db } from "./db";
import { transactionTable } from "./db/schema";
import { eq } from "drizzle-orm";
import TransactionCard from "./components/TransactionCard";

export default async function Indexes() {
  // Getting user session id
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    redirect("/api/auth/signin");
  }

  // getting transactions
  const transactions = await db
    .select()
    .from(transactionTable)
    .where(eq(transactionTable.userId, userId));

  const listTransactions = transactions.map((items) => {
    return (
      <TransactionCard
        imagesrc="./vercel.svg"
        time={items.date}
        title={items.title}
        ttype={items.description}
        amount={Number(items.amount)}
        key={items.id}
      />
    );
  });

  return listTransactions;
}
