export default function Categroies() {
  return (
    <>
      <header className="flex justify-between py-2.5">
        <p className="text-2xl font-bold">Categories</p>
        <button className="bg-white border-0 rounded-full h-10 w-10">O</button>
      </header>
      <button className="w-full bg-indigo-400 border-0 rounded-xl h-10">
        <i className=" bg-white border-0 rounded-full">+</i>Add Category
      </button>
    </>
  );
}
