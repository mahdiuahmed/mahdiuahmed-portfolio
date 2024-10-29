import Image from "next/image";
import img from "../public/image.jpg";

export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-red-200">
      <div className="relative w-full h-full">
        <Image
          src={img}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          quality={50}
          className="brightness-75"
        />
        <header className="absolute inset-0 flex items-center justify-center z-10 ">
          <h1 className="font-nexus text-white text-[50rem]">welcome</h1>
        </header>
      </div>
    </main>
  );
}
