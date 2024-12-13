import Image from "next/image";
import React, { useEffect, useState } from "react";
import UiCategory from "./UiCategory";
import UiTitle from "./UiTitle";
import UiAuthor from "./UiAuthor";
import axios from "axios";

type propsType = {
  id: string;
  cardImage: string;
  category: string;
  title: string;
  link: string;
  authorImage: string;
  authorName: string;
  date: string;
};

export type categoryType={
  _id:string,
  categoryName:string
}



const UiBlogCard = ({
  cardImage,
  category,
  title,
  link,
  authorImage,
  authorName,
  date,
  id,
}: propsType) => {
  const [categoryIdToString, setCategoryIdToString] = useState<string>("");
  const getCategory = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/category-list`
    );
    setCategoryIdToString(
      response.data
        .filter((item:categoryType) => item._id == category)
        .map((item:categoryType) => item.categoryName).toString()
    );
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="border border-section p-4 rounded-lg">
      <div className="relative mb-4">
        <a href={link}>
          <div className="relative w-full h-64">
            <Image src={cardImage} alt="" fill />
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <UiCategory title={categoryIdToString} />
        <UiTitle link={`/blog-detail/${id}`} className="font-bold text-xl">
          {title}
        </UiTitle>
        <UiAuthor image={authorImage} name={authorName} date={date} />
      </div>
    </div>
  );
};

export default UiBlogCard;
