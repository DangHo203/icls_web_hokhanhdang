/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Button from "./Button";

interface ContentSectionProps {
  imageUrl: string;
  altText: string;
  content: string;
  imageOnLeft?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  imageUrl,
  altText,
  content,
  imageOnLeft = true,
}) => (
  <div className="flex flex-row gap-10 justify-between mt-16 w-full text-black max-md:mt-10 max-md:max-w-full">
    {imageOnLeft ? (
      <>
        <img
          loading="lazy"
          src={imageUrl}
          alt={altText}
          className="object-contain self-stretch my-auto aspect-[1.41] min-w-[240px] w-[700px] max-md:max-w-full"
        />
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[602px] max-md:max-w-full">
          <p className="mr-auto text-3xl font-light leading-10 text-left max-md:max-w-full">
            {content}
          </p>
          <Button>Register now</Button>
        </div>
      </>
    ) : (
      <>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[602px] max-md:max-w-full">
          <p className="text-3xl font-light leading-10 text-left max-md:max-w-full">
            {content}
          </p>
          <Button>Register now</Button>
        </div>
        <img
          loading="lazy"
          src={imageUrl}
          alt={altText}
          className="object-contain self-stretch my-auto aspect-[1.41] min-w-[240px] w-[700px] max-md:max-w-full"
        />
      </>
    )}
  </div>
);

export default ContentSection;
