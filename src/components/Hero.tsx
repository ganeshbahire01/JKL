import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Profile from "./Profile";
import Badge from "./Badge";
import BlogsData from "@/data/BlogData.json";
import LargeBlogCard from "./card/LargeBlogCard";
import { BlogPost } from "@/utils/Types";
import SmallCard from "./card/SmallCard";
import Home from "./home/Home";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative">
      <div className="fixed inset-0">
        <div className="fixed h-[100px] top-[35%] -right-1/4 w-[150%]  bg-[#D6BBFB] transform -rotate-12 origin-right"></div>
        <div className="fixed h-[100px] top-[45%] -right-1/4 w-[150%]  bg-[#e8d7fd] transform -rotate-12 origin-right"></div>
        <div className="fixed h-[80px] top-[55%] -right-1/4 w-[150%]  bg-[#f4ebff] transform -rotate-12 origin-right"></div>
      </div>
      <div className="container mx-auto md:px-8 2xl:px-36 ">
        <Home />
        <div className="relative gap-8 justify-evenly lg:flex">
          {BlogsData.blogPosts.slice(0, 1).map((post) => (
            <LargeBlogCard {...(post as BlogPost)} />
          ))}
          <div className="px-6 mt-6 hidden lg:block  py-6 lg:mt-0 lg:pt-6 shadow-2xl marker:w-1/2 bg-white">
            {BlogsData.blogPosts.slice(1, 3).map((post, index) => (
              <SmallCard key={index} {...(post as BlogPost)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
