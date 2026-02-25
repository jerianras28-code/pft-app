// image option for button = WIP

type CardProps = {
  icon?: string;
  //   imagesrc: string;
  //   imagealt: string;
  title: string;
};

export default function FullButton({
  icon,
  //   imagesrc,
  //   imagealt,
  title,
}: CardProps) {
  return (
    <div>
      <button
        className="my-3 flex flex- justify-center items-center gap-2
       max-w-full w-screen bg-indigo-400 active:bg-indigo-600 hover:bg-indigo-600 border-0 rounded-xl h-12"
      >
        <i className=" bg-white object-center border-0 rounded-full  px-1.75 pr-2">
          {icon}
          {/* <Image src={imagesrc} alt={imagealt} width={100} height={100} /> */}
        </i>
        <p>{title}</p>
      </button>
    </div>
  );
}
