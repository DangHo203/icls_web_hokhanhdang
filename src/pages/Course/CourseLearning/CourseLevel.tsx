/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface CourseLevelProps {
  title: string;
  description: string;
  target: string;
  time: string;
  money: string;
  imageSrc: string;
  imageAlt: string;
  isReversed: boolean;
}

const CourseLevel: React.FC<CourseLevelProps> = ({
  title,
  description,
  target,
  time,
  money,
  imageSrc,
  imageAlt,
  isReversed,
}) => {
  const contentOrder = isReversed ? "order-2" : "order-1";
  const imageOrder = isReversed ? "order-1" : "order-2";

  return (
    <section
      className={`flex flex-wrap gap-10 items-center py-16 ${
        isReversed ? "pl-10" : "pr-10"
      } w-full min-h-[595px] max-md:px-5 max-md:max-w-full`}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={`object-contain grow shrink self-stretch my-auto rounded-none aspect-[1.3] min-w-[240px] w-[493px] max-md:max-w-full ${imageOrder}`}
      />
      <div
        className={`flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[547px] max-md:max-w-full ${contentOrder}`}
      >
        <h2 className="text-5xl leading-loose text-orange-500 font-[250] max-md:max-w-full max-md:text-4xl">
          {title}
        </h2>
        <div className="flex flex-col mt-10 w-full font-light text-black max-md:max-w-full">
          <p className="text-3xl leading-10 max-md:max-w-full">{description}</p>
          <div className="flex flex-row gap-5 mt-8 text-center text-black max-md:flex max-md:max-w-full max-sm:hidden">
            <div className="flex flex-col self-stretch px-2.5 pt-2.5 pb-6 my-auto border border-black border-solid min-h-[144px] w-[210px]">
              <div className="gap-2.5 self-stretch py-2.5 w-full text-3xl leading-none whitespace-nowrap bg-orange-500">
                Target
              </div>
              <div className="self-start mt-5 text-xl">{target}</div>
            </div>
            <div className="flex flex-col self-stretch p-2.5 my-auto border border-black border-solid min-h-[144px] w-[210px]">
              <div className="gap-2.5 self-stretch py-2.5 w-full text-3xl leading-none whitespace-nowrap bg-orange-500">
                Time
              </div>
              <div className="flex-1 self-start mt-5 text-xl">{time}</div>
            </div>
            <div className="flex flex-col self-stretch p-2.5 my-auto whitespace-nowrap border border-black border-solid min-h-[144px] w-[210px]">
              <div className="gap-2.5 self-stretch py-2.5 w-full text-3xl leading-none bg-orange-500">
                Money
              </div>
              <div className="flex-1 self-start mt-5 text-xl">{money}</div>
            </div>
          </div>
          <button className="gap-2.5 self-stretch p-2.5 mt-8 max-w-full text-2xl font-semibold bg-orange-500 shadow-[4px_4px_0px_rgba(1,101,47,1)] w-[244px]">
            Register now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseLevel;
