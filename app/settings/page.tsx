import SettingsCards from "@/components/SettingsCards";
import FullButton from "@/components/FullButton";
import Image from "next/image";

export default function Settings() {
  return (
    <>
      <header className="py-2.5">
        <p className="text-2xl font-bold">Settings</p>
      </header>
      <section className="pt-10 pb-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className=" p-4 border-0 rounded-full bg-gray-400">
            <Image
              src={"/vercel.svg"}
              alt="Profile Piture"
              width={100}
              height={100}
              className="h-12 w-12 text-indigo-600"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-semibold">UserName</p>
            <p className="text-xs text-gray-400">Useremail@example.com</p>
          </div>
        </div>
      </section>
      <section className="py-2.5">
        <SettingsCards imagesrc="/file.svg" title="Time-Zone" subdata="GMT-4" />
      </section>
      <FullButton icon={`>`} title="Log Out" />
    </>
  );
}
