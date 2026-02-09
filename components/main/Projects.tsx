"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                {[
                    {
                        src: "/Shrey Kart.jpeg",
                        title: "Shrey Kart",
                        description:
                            "An end-to-end full-stack web application with React, Node.js, and SQL, demonstrating strong skills in frontend development, backend logic, and database design.",
                    },
                    {
                        src: "/Spotify.jpeg",
                        title: "Spotify Clone",
                        description:
                            "Created a Spotify Clone that replicates core music-streaming features, including a responsive UI, backend APIs, and database integration using React, Node.js, and SQL.",
                    },
                    {
                        src: "/Github.png",
                        title: "GitHub",
                        description:
                            "To see all of my projects, visit my GitHub profile. Discover my projects and source code on GitHub.",
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                        className="slide-in"
                        style={{ transitionDelay: `${index * 0.15}s` }}
                    >
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
