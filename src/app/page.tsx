import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#F9F5FF] px-2 md:px-8 pb-24">
      <Hero />
      <Blogs />
    </div>
  );
}
