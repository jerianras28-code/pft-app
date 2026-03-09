import { redirect } from "next/navigation";
import { auth } from "./auth";
import { db } from "./db";
import { transactionTable } from "./db/schema";
import { eq } from "drizzle-orm";

export async function transactionData() {
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
  return transactions;
}
