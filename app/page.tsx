"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [beloved, setBeloved] = useState<string>("");
  const router = useRouter();
  const handleGenerate = () => {
    router.push(`/${beloved}`);
  };
  return (
    <section className="bg-red-300 h-screen w-screen flex justify-center items-center">
      <div className="bg-white w-[60%] h-[60%] rounded-2xl shadow-2xl flex justify-center items-center flex-col gap-12">
        <div className="texl-lg lg:text-2xl text-center flex flex-col gap-6">
          <p>
            <span className="text-red-300 font-bold">What </span> is the name of
            our beloved?
          </p>
          <input
            value={beloved}
            onChange={(e) => setBeloved(e.target.value)}
            placeholder="My love's name is..."
            type="text"
            className="border border-red-300 rounded-2xl text-center text-sm px-4 py-2 focus:outline-0"
          />
        </div>
        <button
          onClick={handleGenerate}
          className="bg-red-300 px-4 py-2 rounded-2xl text-white font-bold hover:shadow-md hover:scale-105 active:scale-95"
        >
          GENERATE
        </button>
      </div>
    </section>
  );
};

export default page;
