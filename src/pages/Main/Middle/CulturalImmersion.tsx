/**
 * This code was generated by Builder.io.
 */
import React from "react";
import DashedBorder from "./DashedBorder";
import SectionTitle from "./SectionTitle";
import ContentSection from "./components/ContentSection";
import { useRef, useEffect } from "react";
const CulturalImmersion: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animate-fade-right",
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
        <section className="flex flex-col w-full max-md:px-5 max-md:max-w-full px-20">
            <section ref={sectionRef} className="flex flex-col px-11 py-16 ml-auto w-full bg-white max-md:px-5 max-md:max-w-full">
                <SectionTitle>Cultural Immersion</SectionTitle>
                <ContentSection
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3c41ad8d309e4f831344b5a87eafd33e35148c9046731a665e19ff1b8893c263?placeholderIfAbsent=true&apiKey=e34b0bbc442149bfa463a424862e236a"
                    altText="Cultural immersion activities"
                    content="At ICLS, learning goes beyond the classroom. Participate in cultural workshops, language exchange programs, and field trips to experience Vietnam firsthand."
                    imageOnLeft={false}
                />
            </section>
            <DashedBorder />
        </section>
    );
};

export default CulturalImmersion;
