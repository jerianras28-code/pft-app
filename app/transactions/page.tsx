import TransactionCard from "@/components/TransactionCard";

export default function Transactions() {
  return (
    <>
      <header>
        <span>Transactions</span>
        <input type="text" />
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
