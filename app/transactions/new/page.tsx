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
          type="number"
          name="formamount"
          id="formamount"
        />
        <input className="bg-white" type="date" name="formdate" id="formdate" />
        <button className=" hover:" type="submit">
          Submit pls
        </button>
      </form>
    </>
  );
}
