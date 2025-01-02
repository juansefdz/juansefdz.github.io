"use client";

import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import Link from "next/link";
import { Card } from "../components/card";

const services = [
	{
		label: "LegalTech",
		handle: "Transforming the Legal Sector with Technology",
		description:
			"Driving innovation in legal processes with tailored technological solutions. Automating workflows, enhancing efficiency, and streamlining legal management.",
	},
	{
		label: "Specialized Web Consulting",
		handle: "Custom Web Development & Optimization",
		description:
			"Offering expert consultation for building, optimizing, and maintaining web platforms. Focused on delivering seamless user experiences, mobile responsiveness, and high-performing websites.",
	},
	{
		label: "Database Management",
		handle: "Efficient Data Storage & Optimization",
		description:
			"Providing efficient database design, optimization, and management services for high availability and performance. Ensuring your data is secure, easily accessible, and scalable.",
	},
	{
		label: "Backend Solutions",
		handle: "Powerful Backend Solutions for Businesses",
		description:
			"Designing backend architectures for robust and scalable solutions, from microservices to API development, ensuring seamless integration and long-term sustainability.",
	},
	{
		label: "Cloud Solutions",
		handle: "Scalable Cloud Development for Flexibility",
		description:
			"Building cloud-based solutions to help businesses scale seamlessly. Ensuring high availability, flexibility, and the ability to grow without limits.",
	},
	{
		label: "Cybersecurity Solutions",
		handle: "Data Protection & Threat Mitigation",
		description:
			"Offering cybersecurity services to protect digital infrastructure, detect vulnerabilities, and mitigate threats. Ensuring your systems and data are secure against emerging threats.",
	},
];

export default function AboutMe() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative overflow-hidden">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={300}
				ease={20}
			/>
			<Navigation />

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto text-white">
				<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
					{services.map((s) => (
						<Card key={s.label}>
							<div className="z-10 flex flex-col items-center p-6 bg-zinc-800 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-lime-500 hover:shadow-2xl hover:text-zinc-900 group">
								<span className="lg:text-xl font-medium xl:text-3xl text-white group-hover:text-zinc-900 font-display">
									{s.handle}
								</span>
								<span className="mt-4 text-sm text-center text-zinc-400 group-hover:text-zinc-900">
									{s.label}
								</span>
								<p className="mt-4 text-sm text-center text-zinc-300 group-hover:text-zinc-900">
									{s.description}
								</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
