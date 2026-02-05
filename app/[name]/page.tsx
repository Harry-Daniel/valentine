"use client";

import { heartRain } from "@/component/confettiRain";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import askingImage from "@/public/assets/images/asking.jpg";
import celebrateGif from "@/public/assets/gifs/celebrate.gif";
import { useParams } from "next/navigation";

export default function Home() {
  const { name } = useParams();
  const belovedName =
    typeof name === "string"
      ? decodeURIComponent(name)
      : Array.isArray(name)
        ? decodeURIComponent(name[0])
        : "";
  console.log(belovedName);
  const [proposalStage, setProposalStage] = useState(1);

  const [visible, setVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOnClickYes = () => {
    audioRef.current?.play();
    heartRain(5000);
    setProposalStage(2);
  };

  return (
    <section className="bg-red-300 h-screen w-screen flex justify-center items-center">
      <audio ref={audioRef} src="/assets/songs/music.mp3" preload="auto" />
      <div className="bg-white w-[60%] h-[60%] rounded-2xl shadow-2xl flex justify-center items-center ">
        {/* Asking Stage */}
        {proposalStage === 1 && (
          <div className="flex flex-col justify-center items-center gap-12 p-8">
            <div className=" flex flex-col gap-4 justify-center items-center">
              <p className="texl-lg lg:text-2xl text-center">
                <span className="text-red-300 font-bold">{belovedName}</span>{" "}
                will you be my Valentiwwwne???
              </p>
              <div className="flex flex-row gap-2 lg:gap-24 ">
                <button
                  onClick={handleOnClickYes}
                  className="bg-red-300 text-white font-bold px-4 py-1 w-16 h-8 rounded-xl active:scale-95 hover:scale-105"
                >
                  Yes
                </button>
                <div className="relative w-16 h-8">
                  <button
                    onClick={handleOnClickYes}
                    className="bg-red-300 text-white font-bold px-4 py-1 w-16 h-8 rounded-xl active:scale-95 hover:scale-105 absolute"
                  >
                    Yes
                  </button>
                  {visible && (
                    <button
                      onMouseEnter={() => setVisible(false)}
                      onClick={() => setVisible(false)}
                      className="bg-red-300 text-white font-bold px-4 py-1 w-16 h-8 rounded-xl text-center  absolute"
                    >
                      No
                    </button>
                  )}
                </div>
              </div>
              {!visible && (
                <p className="text-center text-pink-800">
                  It's vals baby not April fools, let's stop the jokes 🩷
                </p>
              )}
            </div>
            <Image
              src={askingImage}
              alt="Cutie asking you to be his valentine"
              className="w-32 h-32 lg:w-75 lg:h-75"
              priority
            />
          </div>
        )}

        {/* Celebration Stage */}
        {proposalStage === 2 && (
          <div className="flex flex-col justify-center items-center gap-12 p-8">
            <div className=" flex flex-col gap-4 justify-center items-center">
              <p className="texl-lg lg:text-2xl text-center">Yayyyy!!!🎉</p>
            </div>
            <Image
              src={celebrateGif}
              alt="Happy a beautiful girl accepted"
              className="w-32 h-32 lg:w-75 lg:h-75"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
