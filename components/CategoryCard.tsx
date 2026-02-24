import Image from "next/image";

type CardProps = {
  imagesrc: string;
  title: string;
  ttype?: string;
};

export default function CategoryCard({ imagesrc, title, ttype }: CardProps) {
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

        {/* Category title */}
        <div className="flex flex-col">
          <p className="font-bold">{title}</p>
          <p className="text-xs text-gray-400">{ttype}</p>
        </div>
      </div>

      {/* edit & archive */}
      <div className="flex justify-between">
        <i className="text-sm font-bold">pencilI</i>
        <i className="text-xs text-gray-400">archiveI</i>
      </div>
    </div>
  );
}
