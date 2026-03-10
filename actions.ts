"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { db } from "./db";
import { transactionTable } from "./db/schema";
import { eq, and } from "drizzle-orm";

async function getUserId() {
  // Getting user session id
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect("/api/auth/signin");
  return userId;
}

export async function transactionData() {
  // getting transactions
  const userId = await getUserId();
  const transactions = await db
    .select()
    .from(transactionTable)
    .where(eq(transactionTable.userId, userId));
  return transactions;
}

export async function deleteTransaction(id: number) {
  const userId = await getUserId();
  const transactions = await db
    .delete(transactionTable)
    .where(
      and(eq(transactionTable.userId, userId), eq(transactionTable.id, id)),
    );
  return transactions;
}
