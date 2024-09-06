import { Bell, Music } from "lucide-react";
import Image from "next/image";

type NavbarProps = {
  points: number;
};

const Navbar = ({ points }: NavbarProps) => {
  return (
    <div className="fixed top-0 w-full  flex justify-between py-3 px-4 items-center">
      <div className="text-white text-lg font-bold bg-orange-600 min-w-28 p-2 rounded-3xl shadow-xl flex items-center gap-2">
        <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-red-600">
          <Image src="/tap-img2.webp" height={100} width={100} alt="logo" />
        </div>
        {points}
      </div>
      <div className="flex gap-4 text-white">
        <div className="cursor-pointer hover:bg-orange-500 p-2 rounded-full duration-100 hover:bg-opacity-50">
          <Bell className=" h-6 w-6" />
        </div>
        <div className="cursor-pointer hover:bg-orange-500 p-2 rounded-full duration-100 hover:bg-opacity-50">
          <Music className=" h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
