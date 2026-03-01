import Image from "next/image";
import FinanceDataCard from "@/components/FinanceDataCard";

export default function Dashboard() {
  return (
    <>
      {/* welcome back card */}
      <header className="flex gap-5 py-2.5 items-center">
        <Image
          className="w-10 h-10 border border-black rounded-full"
          src={"/vercel.svg"}
          alt="profile picture"
          height={100}
          width={100}
        />
        <p>
          Welcome back
          <br />
          <span>User</span>
        </p>
      </header>
      {/* total balance card */}
      <section className="flex py-5 justify-center">
        <div
          id="total balance container"
          className="flex flex-col justify-center"
        >
          <p className="text-gray-400 text-center">total balance</p>
          <p className="text-indigo-600 text-4xl font-bold">$6,345.15</p>
        </div>
      </section>
      {/* total income & expense card */}
      <section className="flex justify-around pt-5">
        {/* income */}
        <FinanceDataCard
          type="income"
          imagesrc="/globe.svg"
          amount={2734.79}
          percent={10}
        />
        {/* expense */}
        <FinanceDataCard
          type="expense"
          imagesrc="/globe.svg"
          amount={1253.35}
          percent={7}
        />
      </section>
    </>
  );
}
