"use client";

import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import Image from "next/image";
import Footer from "../components/footer";
import Link from "next/link";

export default function AboutMe() {
	return (
		<div className="bg-gradient-to-tl flex items-center flex-col justify-center from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative min-h-screen  ">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={600}
			/>
			<Navigation />

			<div className="max-w-7xl mx-auto px-4 py-20 lg:py-24 mt-24 flex flex-col lg:flex-row items-center justify-center gap-12">
				<div className="flex-1 text-center items-center lg:text-left  ">
					<h1 className="text-4xl font-semibold text-white mb-4">
						About <span className="text-lime-400">Me</span>
					</h1>
					<p className="text-lg text-zinc-300 mb-6 text-justify">
						I'm a lawyer with a solid legal background and a strong focus on
						technological innovation. My experience as a backend developer has
						allowed me to integrate technological solutions in key market areas,
						creating applications that optimize processes and generate
						commercial value across various sectors. Specializing in backend
						development, with a focus on Java and the Spring Boot framework, I
						have worked on projects ranging from process automation to
						commercial solutions, contributing to the digitalization and
						transformation of various industries.
					</p>
					<Link href="/contact">
						<h1 className="text-2xl font-light text-lime-400 mb-4 text-center transition-all duration-300 transform hover:scale-105 hover:text-lime-400 hover:font-bold hover:text-shadow-xl">
							Let’s connect and explore how I can contribute to your team’s
							challenges and objectives.
						</h1>
					</Link>
				</div>

				<div className="relative w-72 h-72 sm:h-96 lg:h-96 flex items-center justify-center">
					<div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
						<Image
							src="/pic.png"
							alt="Profile picture of Juan Sebastian Fernandez Montoya"
							layout="responsive"
							width={400}
							height={400}
							style={{ objectFit: "cover" }}
							quality={100}
							priority
              className="hidden lg:block" 
						/>
						<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 opacity-100 hover:opacity-80" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
