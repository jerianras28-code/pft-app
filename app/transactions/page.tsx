import { deleteTransaction, transactionData } from "@/actions";
import Link from "next/link";
import TransactionCard from "@/components/TransactionCard";

export default async function Transactions() {
  const transactions = await transactionData();
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
          <Link href={"/transactions/new"}>
            <button className="bg-indigo-400 h-10 w-10 border-0 rounded-xl hover:bg-indigo-600 active:bg-indigo-600">
              +
            </button>
          </Link>
        </div>
      </header>
      <section>
        {transactions.map((items) => {
          return (
            <TransactionCard
              imagesrc="./vercel.svg"
              time={items.date}
              title={items.title}
              ttype={items.description}
              amount={Number(items.amount)}
              ondelete={deleteTransaction.bind(null, items.id)}
              key={items.id}
            />
          );
        })}
      </section>
    </>
  );
}
