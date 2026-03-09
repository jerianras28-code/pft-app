import { db } from "@/db/index";
import { transactionTable } from "@/db/schema";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default function NewTransaction() {
  async function createTransaction(formdata: FormData) {
    "use server";
    const title = formdata.get("formtitle");
    const description = formdata.get("formdescription");
    const amount = formdata.get("formamount");
    const date = formdata.get("formdate");
    const transactionType = formdata.get("formtransactiontype");

    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      redirect("/api/auth/signin");
    }

    await db.insert(transactionTable).values({
      title: title as string,
      description: description as string,
      amount: amount as string,
      date: date as string,
      userId: userId,
      transactionType: transactionType as "income" | "expense",
    });
  }

  return (
    <>
      <header></header>
      <form action={createTransaction}>
        <input
          className="bg-white"
          placeholder="title"
          type="text"
          name="formtitle"
          id="formtitle"
        />
        <input
          className="bg-white"
          placeholder="description"
          type="text"
          name="formdescription"
          id="formdescription"
        />
        <input
          className="bg-white"
          placeholder="amount"
          type="numeric"
          name="formamount"
          id="formamount"
        />
        <p>Income or Expense</p>
        <label>Income</label>
        <input
          type="radio"
          name="formtransactiontype"
          id="formtransactiontype"
          value="income"
        />
        <br />
        <label>Expense</label>
        <input
          type="radio"
          name="formtransactiontype"
          id="formtransactiontype"
          value="expense"
        />
        <br />
        <br />
        <input className="bg-white" type="date" name="formdate" id="formdate" />
        <button className=" hover:" type="submit">
          Submit pls
        </button>
      </form>
    </>
  );
}
