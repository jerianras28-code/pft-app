import Image from "next/image";

type CardProps = {
  type: string;
  imagesrc: string;
  amount: number;
  percent: number;
};

export default function FinanceDataCard({
  type,
  imagesrc,
  amount,
  percent,
}: CardProps) {
  return (
    <>
      <div className="flex flex-col bg-white py-5 px-8 border-0 rounded-2xl">
        <Image
          className="w-5 h-5"
          src={imagesrc}
          alt="income icon"
          width={100}
          height={100}
        />
        <p>
          {type}
          <br />
          <span>${amount}</span>
        </p>
        <p>{percent}%</p>
      </div>
    </>
  );
}
