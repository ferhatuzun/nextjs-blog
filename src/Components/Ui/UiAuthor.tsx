import Image from "next/image";
import React from "react";
import UiTitle from "./UiTitle";

type propsType = {
  image: string;
  name: string | undefined;
  date: string | undefined;
};

const UiAuthor = ({ image, name, date }: propsType) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="relative flex items-center gap-x-1">
        <Image src={image} alt="" width={36} height={36} />
        <UiTitle className="text-gray font-semibold">{name}</UiTitle>
      </div>
      <div>
        <UiTitle className="text-gray">{date}</UiTitle>
      </div>
    </div>
  );
};

export default UiAuthor;
