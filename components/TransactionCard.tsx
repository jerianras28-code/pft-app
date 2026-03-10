"use client";
import Image from "next/image";

type CardProps = {
  imagesrc: string;
  title: string;
  ttype: string;
  amount: number;
  time: string;
  ondelete: () => void;
};

export default function TransactionCard({
  imagesrc,
  title,
  ttype,
  amount,
  time,
  ondelete,
}: CardProps) {
  return (
    <div className=" bg-white flex justify-between items-center border-0 rounded-[10px] p-5 my-5">
      <div className="flex gap-5 items-center">
        <div className="border-0 rounded-full h-10 w-10 flex justify-center items-center bg-indigo-100">
          <Image
            src={imagesrc}
            alt="Transaction Icon"
            width={100}
            height={100}
            className="h-5 w-5"
          />
        </div>

        {/* Transaction title */}
        <div className="flex flex-col">
          <p className="font-bold">{title}</p>
          <p className="text-xs text-gray-400">{ttype}</p>
        </div>
      </div>

      {/* amount & time */}
      <div>
        <p className="text-sm font-bold">${amount}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
      <button
        onClick={ondelete}
        className="bg-red-400 h-10 w-10 border-0 rounded-xl hover:bg-red-600 active:bg-red-600"
      >
        x
      </button>
    </div>
  );
}
