import TransactionCard from "@/components/TransactionCard";

export default function Transactions() {
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
        <TransactionCard
          imagesrc="/window.svg"
          title="Starbucks"
          ttype="cash"
          amount={7.36}
          time="07:30 PM"
        />
        <TransactionCard
          imagesrc="/window.svg"
          title="Starbucks"
          ttype="cash"
          amount={7.36}
          time="07:30 PM"
        />
      </section>
    </>
  );
}
