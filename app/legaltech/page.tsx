"use client";

import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import Image from "next/image"; // Si estás usando Next.js

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative min-h-screen">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-semibold text-white mb-4">Legal Tech</h1>
          
        </div>
      </div>
    </div>
  );
}
