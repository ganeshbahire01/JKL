import { BlogPost } from "@/utils/Types";
import Image from "next/image";
import React from "react";
import Badge from "../Badge";

const SmallCard = ({
  author,
  title,
  description,
  date,
  image,
  badge,
  category,
}: BlogPost) => {
  return (
    <div className="flex gap-6 pt-8">
      <div>
        <Image src={image.src} alt={image.alt} width={255} height={250} />
      </div>
      <div>
        <div className="font-inter text-sm font-semibold leading-5 text-left text-[#6941C6]">
          {category} • {date}
        </div>
        <div className="font-inter text-lg font-semibold leading-7 text-left pt-2 hover:text-indigo-700 hover:underline">
          {title}
        </div>
        <div className="max-w-72 line-clamp-3 font-inter text-base font-normal leading-6 text-left text-[#667085] pt-1">
          {description}
        </div>
        <div className="pt-4 flex gap-2">
          {badge.map((badge) => (
            <Badge text={badge.text} theme={badge.theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
