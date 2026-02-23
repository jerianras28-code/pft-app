import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* welcome back card */}
      <header className="flex gap-5 pb-5">
        <Image
          className="w-10 h-10 border border-black rounded-[100px]"
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
      <main className="flex py-5 justify-center">
        <div id="total balance container">
          <p>
            total balance
            <br />
            <span>$6,345.15</span>
          </p>
        </div>
        {/* total income & expense card */}
        <div></div>
      </main>
    </>
  );
}
