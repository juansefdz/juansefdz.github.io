"use client";

import { useState, useEffect } from "react";
import Footer from "../components/footer";
import { Navigation } from "../components/nav";
import { ProjectCarousel } from "../components/carousel";

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
        <ProjectCarousel projects={projects} languages={languages} />
      </main>
      <Footer />
    </section>
  );
}
