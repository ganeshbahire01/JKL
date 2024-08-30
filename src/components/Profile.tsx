import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  date: string;
};

const Profile = ({ date, image, name }: Props) => {
  return (
    <div className="flex gap-3">
      <div>
        <Image
          src={image}
          alt={name ?? ""}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <div className="font-inter text-sm font-medium leading-5 text-left">
          {name}
        </div>
        <div className="font-inter text-sm font-normal leading-5 text-left text-[#667085]">
          {date}
        </div>
      </div>
    </div>
  );
};

export default Profile;
