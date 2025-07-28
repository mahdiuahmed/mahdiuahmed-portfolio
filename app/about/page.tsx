import React from "react";
import Image from "next/image";
import heroimage from "../../public/me image.jpeg";

export default function page() {
  return (
    <main className="mt-36  flex flex-col items-center justify-center px-8 max-sm:px-4">
      <section className=" flex items-center justify-between  max-w-screen-lg px-8 space-x-8">
        <div>
          <div className="">
            <h1 className="text-[140px]/none font-bebas underline decoration-lime-300">
              About me
            </h1>
          </div>
          <p className="max-w-screen-lg">
            How's it going? I'm so glad you're here. My name is Mahdi Ahmed
          </p>
        </div>
        <div className="overflow-hidden max-w-md">
          <div className="pr-4 pb-4 bg-lime-300">
            <Image
              src={heroimage}
              alt=""
              className="-mt-40 grayscale brightness-125"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
