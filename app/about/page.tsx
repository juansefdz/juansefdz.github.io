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
          <h1 className="text-4xl font-semibold text-white mb-4">About Me</h1>
          <p className="text-lg text-zinc-300 mb-6">
            Soy abogado con formación legal y un fuerte enfoque en innovación
            tecnológica. Mi experiencia como desarrollador backend me ha
            permitido integrar soluciones tecnológicas en áreas relevantes en el
            mercado, creando aplicaciones que optimizan procesos y generan valor
            comercial en diversos sectores. Especializado en el desarrollo
            backend, con un enfoque en el uso de Java y el framework Spring
            Boot, he trabajado en proyectos que van desde la automatización de
            procesos hasta soluciones comerciales, contribuyendo a la
            digitalización y transformación de diversas industrias. Estoy
            abierto a nuevas oportunidades donde pueda aplicar mis habilidades
            en desarrollo backend y soluciones tecnológicas para impulsar la
            transformación digital y crear valor en sectores clave. Conéctemos y
            exploremos cómo puedo contribuir a los desafíos y objetivos de tu
            equipo.
          </p>
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
    </div>
  );
}
