"use client";

import Footer from "@/components/footer";
import LimitSlider from "@/components/limit-slider";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

const backgroundImage = {
  backgroundImage: `url('/bg-img.jpg')`,
  width: "100%",
  height: "100%",
};

export default function Home() {
  const [points, setPoint] = useState(0);
  const [totalPower, setTotalPower] = useState(5000);
  const [usedPower, setUsedPower] = useState(0);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const pointsToAdd = 6;

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (audio?.paused) {
      audio.pause();
    }
    audio?.play();
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    // if (totalPower <= 0) return;
    setTotalPower((prev) => prev - 5);
    setPoint((prev) => prev + 5);
    setUsedPower((prev) => prev + 5);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
    // audio?.pause();
  };

  useEffect(() => {
    const audio = new Audio("/voice.m4a");
    setAudio(audio);
  }, []);
  return (
    <div
      style={backgroundImage}
      className="bg-green-600 bg-cover bg-center flex justify-center overflow-hidden"
    >
      <Navbar points={points} />
      <div className="h-screen flex flex-col justify-center items-center rounded-full ">
        <div
          className="h-60 w-60 flex justify-center items-center rounded-full ring-8 ring-red-600 bg-red-700 overflow-hidden shadow-xl"
          onClick={onClick}
        >
          <Image src="/tap-img2.webp" height={500} width={500} alt="Tap-Img" />
        </div>

        {clicks.map((click) => (
          <div
            key={click.id}
            className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none z-50"
            style={{
              top: `${click.y - 42}px`,
              left: `${click.x - 28}px`,
              animation: `float 1s ease-out`,
            }}
            onAnimationEnd={() => handleAnimationEnd(click.id)}
          >
            {pointsToAdd}
          </div>
        ))}
      </div>

      <LimitSlider totalPower={totalPower} usedPower={usedPower} />
      <Footer />
    </div>
  );
}
