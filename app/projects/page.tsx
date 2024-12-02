"use client";

import { useState, useEffect } from "react";
import { Card } from "../components/card";
import Footer from "../components/footer";
import { Navigation } from "../components/nav";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  languages: string[];
  url?: string;
}

interface LanguageData {
  [key: string]: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [languages, setLanguages] = useState<LanguageData>({});
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  // Fetch Languages Data
  async function fetchLanguagesData(): Promise<void> {
    try {
      const response = await fetch("data/projects/languages.json");
      const data: { languages: { name: string; logoUrl: string }[] } =
        await response.json();
      const languageMap: LanguageData = data.languages.reduce(
        (acc: LanguageData, lang) => {
          acc[lang.name] = lang.logoUrl;
          return acc;
        },
        {} as LanguageData
      );
      setLanguages(languageMap);
    } catch (error) {
      console.error("Error fetching languages data:", error);
    }
  }

  // Fetch Projects Data
  async function fetchProjectsData(category: string): Promise<void> {
    try {
      const response = await fetch("data/projects/projects.json");
      const data: Record<string, Project[]> = await response.json();
      setProjects(data[category] || []);
    } catch (error) {
      console.error("Error fetching projects data:", error);
    }
  }

  // Handle Category Change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    fetchProjectsData(category);
  };

  // Initial Data Fetch
  useEffect(() => {
    fetchLanguagesData();
    fetchProjectsData(activeCategory);
  }, []);

  return (
    <section className="flex flex-col min-h-screen py-8 px-4 text-zinc-100">
      <Navigation />
      <main className="flex-grow py-8 px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Welcome to the Projects section! Explore a variety of projects I've
            completed. Use the Frontend, Backend, and FullStack filters to find
            specific projects of interest.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "Frontend"
                  ? "bg-lime-500 text-zinc-900"
                  : "bg-zinc-700 hover:bg-zinc-600"
              }`}
              onClick={() => handleCategoryChange("Frontend")}
            >
              Frontend
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "Backend"
                  ? "bg-lime-500 text-zinc-900"
                  : "bg-zinc-700 hover:bg-zinc-600"
              }`}
              onClick={() => handleCategoryChange("Backend")}
            >
              Backend
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "Fullstack"
                  ? "bg-lime-500 text-zinc-900"
                  : "bg-zinc-700 hover:bg-zinc-600"
              }`}
              onClick={() => handleCategoryChange("Fullstack")}
            >
              FullStack
            </button>
          </div>
        </div>
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {projects.map((project) => (
              <Card key={project.name}>
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={`${project.name} Image`}
                    className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-opacity-50 rounded-lg transition-all duration-300 group-hover:bg-opacity-70"></div>
                </div>

                <div className="absolute top-0 left-0 w-full p-4 bg-lime-500 bg-opacity-90 rounded-t-lg">
                  <h2 className="text-lg font-semibold text-white">
                    {project.name}
                  </h2>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-opacity-50 group-hover:bg-opacity-100 transition-all duration-300 ">
                  <div className="opacity-0 group-hover:opacity-100  transition-all duration-300 ">
                    <p className="text-base text-white">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {project.languages.map((lang) => (
                        <img
                          key={lang}
                          src={languages[lang]}
                          alt={`${lang} Logo`}
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-lime-500 hover:text-lime-400"
                      >
                        View Page
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
