"use client";

import Footer from "@/components/footer";
import LimitSlider from "@/components/limit-slider";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

const backgroundImage = {
  backgroundImage: `url('/bg-img.jpg')`,
  width: "100%",
  height: "100%",
};

export default function Home() {
  const [points, setPoint] = useState(0);
  const [totalPower, setTotalPower] = useState(5000);
  const [usedPower, setUsedPower] = useState(0);
  // const [perTapAdd, setper] = useState(0);
  // console.log(bg);

  const onClick = () => {
    if (totalPower <= 0) return;
    setTotalPower((prev) => prev - 5);
    setPoint((prev) => prev + 5);
    setUsedPower((prev) => prev + 5);
  };
  return (
    <div
      style={backgroundImage}
      className="bg-green-600 bg-cover bg-center flex justify-center"
    >
      <Navbar points={points} />
      <div className="h-screen flex flex-col justify-center items-center rounded-full ">
        <div
          className="h-60 w-60 flex justify-center items-center rounded-full ring-8 ring-red-600 bg-red-700 overflow-hidden shadow-xl transition-all hover:scale-105 duration-150"
          onClick={onClick}
        >
          <Image src="/tap-img2.webp" height={500} width={500} alt="Tap-Img" />
        </div>
      </div>

      <LimitSlider totalPower={totalPower} usedPower={usedPower} />
      <Footer />
    </div>
  );
}
