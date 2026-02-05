"use client";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const belovedSchema = z
    .string()
    .min(1, "Don't be shy, tell us who your beloved is.")
    .max(
      255,
      "Wow, that is a beautiful name your beloved has, kindly shorten it for us",
    );
  const [beloved, setBeloved] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const router = useRouter();

  const handleGenerate = () => {
    const result = belovedSchema.safeParse(beloved);
    if (!result.success) {
      const errorMessages = result.error.issues.map((issue) => issue.message);
      setErrors(errorMessages);
      return;
    }

    setErrors([]);
    const destination = `${window.location.origin}/${result.data}`;
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(destination);
        alert(
          "The link has been copied to your clipboard. Share it with your beloved",
        );
      } catch (err) {
        console.error("Failed to copy", err);
      }
    };
    copyToClipboard();
    router.push(`/${result.data}`);
  };
  return (
    <section className="bg-red-300 h-screen w-screen flex justify-center items-center">
      <div className="bg-white w-[60%] h-[60%] rounded-2xl shadow-2xl flex justify-center items-center flex-col gap-12 p-4">
        <div className="texl-lg lg:text-2xl text-center flex flex-col gap-6 ">
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
        {errors.length > 0 &&
          errors.map((error, index) => (
            <p className="text-red-600" key={index}>
              {error}
            </p>
          ))}
      </div>
    </section>
  );
};

export default page;
