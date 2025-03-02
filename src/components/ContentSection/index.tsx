import React from "react";

export type ContentSectionProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ContentSection({ icon, title, description }: ContentSectionProps) {
  return (
    <div className="flex max-w-3xs md:max-w-sm mx-autoflex flex-col items-center justify-center gap-2 md:gap-6">
      {icon}
      <div className="font-bold text-sm md:text-lg lg:text-xl xl:text-3xl text-primary-dark">
        {title}
      </div>
      <div className="text-xs md:text-sm lg:text-lg text-center">{description}</div>
    </div>
  );
}
