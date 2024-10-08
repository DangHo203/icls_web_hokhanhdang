/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface JobListingProps {
  title: string;
  salary: string;
  location: string;
  type: string;
}

const JobListing: React.FC<JobListingProps> = ({
  title,
  salary,
  location,
  type,
}) => {
  return (
    <article className="flex flex-wrap gap-8 items-center px-5 py-10 mt-8 w-full rounded border hover:border-blue-500 border-orange-500 border-solid max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <h2 className="text-3xl leading-none max-md:max-w-full">{title}</h2>
        <div className="flex flex-wrap gap-1 items-center mt-8 w-full text-xl text-center max-md:max-w-full">
          <div className="self-stretch my-auto">{salary}</div>
          <div className="self-stretch my-auto">{location}</div>
          <div className="self-stretch my-auto">{type}</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba5c0d69fb915412dd71bb63569d9453e02a7edc93159e8adf4f33fd0bf7e2a?apiKey=e34b0bbc442149bfa463a424862e236a&"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
        alt=""
      />
    </article>
  );
};

export default JobListing;
