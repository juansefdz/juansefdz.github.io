"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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

interface ProjectCarouselProps {
  projects: Project[];
  languages: LanguageData;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  languages,
}) => {
  return (
    <div className="container flex justify-center px-4 mx-auto shadow-lg rounded-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView="auto"
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-4xl"
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1.2 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name} className="group">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={`${project.name} Image`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0  group-hover:bg-opacity-70 transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-70">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="mt-2 text-sm text-white">{project.description}</p>

                {project.languages.length > 0 && (
                  <div className="flex gap-2 mt-4">
                    {project.languages.map((lang) => (
                      <img
                        key={lang}
                        src={languages[lang]}
                        alt={`${lang} Logo`}
                        className="w-8 h-8"
                      />
                    ))}
                  </div>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 text-sm font-medium text-lime-500 bg-white rounded-lg hover:bg-lime-500 hover:text-white transition-all duration-300"
                  >
                    View Page
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
