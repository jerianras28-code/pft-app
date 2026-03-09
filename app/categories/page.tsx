import CategoryCard from "@/components/CategoryCard";
import FullButton from "@/components/FullButton";
import { Search } from "lucide-react";

export default function Categroies() {
  return (
    <>
      <header className="flex justify-between items-center py-2.5 ">
        <p className="text-2xl font-bold">Categories</p>
        <button className="bg-white border-0 rounded-full h-10 w-10">
          <Search size={20} />
        </button>
      </header>
      <FullButton icon="+" title="Add Category" />
      <section className="mt-15">
        <CategoryCard imagesrc="/file.svg" title="Food" />
      </section>
    </>
  );
}
