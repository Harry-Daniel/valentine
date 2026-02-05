"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function updateSize() {
      setSize({
        width:
          window.innerWidth < 1000
            ? (20 / 100) * window.innerWidth
            : (15 / 100) * window.innerWidth,
        height:
          window.innerHeight < 1000
            ? (20 / 100) * window.innerHeight
            : (15 / 100) * window.innerHeight,
      });
    }

    console.log(size);
    updateSize(); // initial
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleOnClickYes = () => {
    console.log("yes");
  };

  return (
    <section className="bg-red-300 h-screen w-screen flex justify-center items-center">
      <div className="bg-white w-[60%] h-[60%] rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-12 p-8">
        <div className="p-4 flex flex-col gap-4">
          <p className="texl-lg lg:text-2xl text-center">
            <span className="text-red-300 font-bold">
              Karen Mmabilla Adazabra
            </span>{" "}
            will you be my Valentiwwwne???
          </p>
          <div className="flex flex-row justify-center gap-8 lg:gap-32">
            <button
              onClick={handleOnClickYes}
              className="bg-red-300 text-white font-bold px-4 py-1 rounded-xl active:scale-95 hover:scale-105"
            >
              Yes
            </button>
            <div className="relative">
              <button
                onClick={handleOnClickYes}
                className="bg-red-300 text-white font-bold px-4 py-1 rounded-xl active:scale-95 hover:scale-105 absolute"
              >
                Yes
              </button>
              {visible && (
                <button
                  onMouseEnter={() => setVisible(false)}
                  onClick={() => setVisible(false)}
                  className="bg-red-300 text-white font-bold px-4 py-1 rounded-xl text-center  absolute"
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
          src={"/assets/images/asking.jpg"}
          alt="Cutie asking you to be his valentine"
          width={size.width}
          height={size.height}
        />
      </div>
    </section>
  );
}
