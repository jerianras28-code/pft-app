import Image from "next/image";

type CardProps = {
  imagesrc: string;
  title: string;
  subdata?: string;
  //   temporarily made bools optional
  isfirst?: boolean;
  islast?: boolean;
};

export default function SettingsCards({
  imagesrc,
  title,
  subdata,
  isfirst,
  islast,
}: CardProps) {
  return (
    <div
      //  used ternery operater for dynamic card design
      className={`bg-white flex justify-between items-center border-0 p-5 my-5 ${isfirst ? "rounded-t-3xl" : ""} ${islast ? "rounded-b-3xl" : ""} rounded-3xl `}
    >
      <div className="flex gap-5 items-center">
        <div className="border-0 rounded-2xl h-10 w-10 flex justify-center items-center bg-indigo-100">
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
        </div>
      </div>

      {/* edit & archive */}
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-400">{subdata}</p>
        <i className="text-xs text-gray-400">{`>`}</i>
      </div>
    </div>
  );
}
