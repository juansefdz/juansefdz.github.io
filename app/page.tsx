import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Footer from "./components/footer";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-grow">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg duration-500 text-zinc-300 hover:text-lime-400"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="py-4 px-1 z-10 text-3xl text-transparent duration-200 bg-white cursor-default animate-fade-in font-display sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text">
          juanseFDZ
          <span className="text-lime-400 ">.DEV</span>
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-200/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-xl text-zinc-500 m-5 ">EN CONSTRUCCIÓN</h2>
          <h2 className="text-base text-zinc-500 m-5 ">
            ¡Prepárate para descubrir lo que viene!
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}
