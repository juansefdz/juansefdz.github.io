"use client";

import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import Image from "next/image"; // Si estás usando Next.js
import { Heading1 } from "lucide-react";
import { F } from "@upstash/redis/zmscore-Dc6Llqgr";
import Footer from "../components/footer";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-tl flex items-center flex-col justify-center from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative min-h-screen">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex-1 text-center items-center lg:text-left">
          <h1 className="text-4xl font-semibold text-white mb-4">
            About <span className="text-lime-400">Me</span>
          </h1>
          <p className="text-lg text-zinc-300 mb-6 text-justify">
            I am a lawyer with a solid legal background and a strong focus on
            technological innovation. My experience as a backend developer has
            allowed me to integrate technological solutions in key market areas,
            creating applications that optimize processes and generate
            commercial value across various sectors. Specializing in backend
            development, with a focus on Java and the Spring Boot framework, I
            have worked on projects ranging from process automation to
            commercial solutions, contributing to the digitalization and
            transformation of various industries. I am open to new opportunities
            where I can apply my backend development skills and technological
            solutions to drive digital transformation and create value in key
            sectors.
          </p>
          <Link href="/contact">
            <h1 className="text-2xl font-light text-lime-400 mb-4 text-center transition-all duration-300 transform hover:scale-105 hover:text-lime-400 hover:font-bold hover:text-shadow-xl">
              Let’s connect and explore how I can contribute to your team’s
              challenges and objectives.
            </h1>
          </Link>
        </div>

        <div className="flex-1 relative w-full h-72 sm:h-96 lg:h-auto">
          <div className="absolute inset-0 w-full h-full bg-lime-500 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/public/pic.png"
              alt="Foto de Juan Sebastian Fernandez"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
