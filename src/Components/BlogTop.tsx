"use client";
import Image from "next/image";
import UiCategory from "./Ui/UiCategory";
import UiTitle from "./Ui/UiTitle";
import UiAuthor from "./Ui/UiAuthor";
import axios from "axios";
import { useEffect, useState } from "react";
import { blogPostType } from "./BlogPost";
import { categoryType } from "./Ui/UiBlogCard";

const BlogTop = () => {
  const [lastBlogPost, setLastBlogPost] = useState<blogPostType>(
    {} as blogPostType
  );
  const [categoryIdToString, setCategoryIdToString] = useState<string>("");

  const getLastBlogPost = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog/get-blog-list`
    );
    setLastBlogPost(response.data[response.data.length - 1]);

    const categoryName = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/category-list`
    );
    setCategoryIdToString(
      categoryName.data.filter(
        (item: categoryType) =>
          item._id == response.data[response.data.length - 1].category
      )[0].categoryName
    );
  };
  useEffect(() => {
    getLastBlogPost();
    getCategory();
  }, []);
  const getCategory = async () => {};

  return (
    <div className="py-12">
      <div className="relative w-[100%] sm:h-[600px] h-[300px] mb-10 md:mb-0">
        <Image
          src="/images/blog1.png"
          alt=""
          fill={true}
          className="rounded-lg"
        />
      </div>
      <div className=" relative">
        <div className="md:absolute left-20 -bottom-16 bg-primary rounded-lg p-8 md:w-[600px] flex flex-col gap-y-5 border border-gray">
          <UiCategory title={categoryIdToString} theme="light" />
          <UiTitle
            className="font-bold text-3xl"
            link={`/blog-detail/${lastBlogPost._id}`}
          >
            {lastBlogPost.title}
          </UiTitle>
          <UiAuthor
            image="/images/author1.png"
            name={lastBlogPost.author}
            date={lastBlogPost.date}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogTop;
