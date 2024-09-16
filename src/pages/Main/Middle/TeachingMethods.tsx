import React, { useEffect, useRef } from "react";
import DashedBorder from "./DashedBorder";
import SectionTitle from "./SectionTitle";
import ContentSection from "./components/ContentSection";

const TeachingMethods: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animate-fade-left",
                            "animate-duration-[2000ms]",
                            "animate-delay-1000",
                            "animate-ease-in-out"
                        );
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="flex flex-col px-20">
            <DashedBorder />
            <section
                ref={sectionRef}
                className="flex z-10 flex-col px-11 py-16 mt-2 mr-auto w-full max-md:px-5 max-md:max-w-full"
            >
                <SectionTitle>Innovative Teaching Methods</SectionTitle>
                <ContentSection
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7732b851616292889d1b3b9ed542a8fd38e8f4248995622ddb3b42b37d0ca795?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a"
                    altText="Innovative teaching methods illustration"
                    content="Learn Vietnamese through our immersive and interactive teaching approach that blends traditional learning with modern techniques."
                />
            </section>
            <DashedBorder />
        </section>
    );
};

export default TeachingMethods;
