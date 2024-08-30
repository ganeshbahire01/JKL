import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Profile from "../Profile";
import { BlogPost } from "@/utils/Types";

const LargeBlogCard = ({
  author,
  title,
  description,
  date,
  image,
  category,
}: BlogPost) => {
  return (
    <div className="px-6 pt-6 shadow-2xl marker:w-1/2 bg-white">
      <Image src={image.src} alt={image.alt} width={537} height={240} />
      <div className="py-8">
        <div className="font-inter text-sm font-semibold leading-5 text-left text-[#6941C6]">
          {category}
        </div>
        <div className="flex justify-between group pt-3">
          <div className="font-inter text-xl md:text-2xl font-semibold leading-8 text-left  underline-offset-2 ease-in-out group-hover:text-indigo-700  group-hover:underline ">
            {title}
          </div>
          <ArrowUpRight className="group-hover:text-indigo-700" />
        </div>
        <div className="max-w-[530px] pt-3 font-inter text-base font-normal leading-6 text-left">
          {description}
        </div>
        <div className="pt-10">
          <Profile date={date} name={author.name} image={author.image} />
        </div>
      </div>
    </div>
  );
};

export default LargeBlogCard;
