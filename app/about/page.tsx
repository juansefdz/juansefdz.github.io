"use client";

import Particles from "../components/particles";
import { Navigation } from "../components/nav";

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <Navigation />

      <h1 className=" ">
        About Me
      </h1>
    </div>
  );
}
