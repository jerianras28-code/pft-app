import Image from "next/image";

export default function FinanceDataCard(
  type: string,
  imagesrc: string,
  amount: number,
  percent: number,
) {
  return (
    <>
      <div className="flex flex-col">
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
