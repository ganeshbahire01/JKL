"use client";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Profile from "./Profile";
import Image from "next/image";
import BlogsData from "@/data/BlogData.json";
import Card from "./card/Card";
import { BlogPost } from "@/utils/Types";
type Props = {};

const Blogs = (props: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 relative container mx-auto md:px-8 2xl:px-36  w-full my-10">
        {BlogsData.blogPosts.slice(3, showMore ? 15 : 9).map((post) => (
          <Card key={post.title} {...(post as BlogPost)} />
        ))}
      </div>
      <div
        className="flex gap-2 justify-center items-center text-[#6941C6] px-5 py-[14px] bg-[#F9F5FF] w-[150px] rounded-lg relative container mx-auto cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        <ArrowDown height={20} width={20} />
        <span className="font-inter text-base font-medium leading-6 text-left ">
          Load more
        </span>
      </div>
    </>
  );
};

export default Blogs;
