"use client";

import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import Footer from "./components/footer";
import Link from "next/link";

const navigation = [
	{ name: "ProjectsDev", href: "/projects" },
	{ name: "Services", href: "/services" },
	{ name: "About Me", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

const messages = [
	"Software Developer",
	"LegalTech Enthusiast",
	"Backend Specialist",
	"Cloud Solutions",
	"Cybersecurity",
	"Web Development Professional",
];

export default function Home() {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFading(true);
			setTimeout(() => {
				setCurrentMessageIndex((prevIndex) =>
					prevIndex === messages.length - 1 ? 0 : prevIndex + 1
				);
				setIsFading(false);
			}, 500);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col justify-between h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
			<div className="flex flex-col items-center justify-center flex-grow">
				<nav className="my-16 animate-fade-in">
					<ul className="flex items-center justify-center gap-6 md:gap-12">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-lg md:text-2xl duration-500 text-zinc-300 hover:text-lime-400 transform hover:scale-110"
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

				<h1 className="py-4 px-1 z-10 text-4xl text-transparent duration-200 bg-white cursor-default animate-fade-in font-display sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text">
					juanseFDZ
					<span className="text-lime-400 "> .DEV</span>
				</h1>

				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-200/0 via-zinc-300/50 to-zinc-300/0" />

				<div className="my-16 text-center animate-fade-in">
					<h2
						className={`text-2xl md:text-3xl font-semibold m-5 transition-opacity duration-500 ${
							isFading ? "opacity-0" : "opacity-100"
						} ${
							currentMessageIndex % 2 === 0 ? "text-lime-400" : "text-white"
						}`}
					>
						{messages[currentMessageIndex]}
					</h2>
					<h2 className="text-lg md:text-xl text-zinc-500 m-5">
						¡Get ready to discover what's coming!
					</h2>
				</div>
			</div>

			<Footer />
		</div>
	);
}
