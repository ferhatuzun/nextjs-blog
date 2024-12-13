"use client";
import UiAuthor from "@/Components/Ui/UiAuthor";
import UiCategory from "@/Components/Ui/UiCategory";
import UiTitle from "@/Components/Ui/UiTitle";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type singlePostType = {
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

const Page = ({ params }: { params: { id: string } }) => {
  const [singlePost, setSinglePost] = useState<singlePostType[]>([]);
  const [categoryIdToString, setCategoryIdToString] = useState<string>("");
  const getBlogPost = async () => {
    const { id } = await params;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog/single-post/${id}`
    );
    const getCategoryName = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/setting/category-list`)
    setCategoryIdToString(getCategoryName.data.filter((item)=>item._id==response.data[0].category).map((item)=>item.categoryName).toString())
    setSinglePost(response.data);
  };
  
  useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <>
      <div>
        {singlePost.map((post,index) => {
          return (
            <div className="bg-primary text-white" key={index}>
              <div className="container mx-auto sm:px-24 px-6 py-10">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-y-4 w-full">
                    <UiCategory title={categoryIdToString} theme="light" />
                    <UiTitle className="font-semibold text-2xl">
                      {post.title}
                    </UiTitle>
                    <UiAuthor
                      image="/images/author1.png"
                      name={post.author}
                      date={post.date}
                    />
                    <div className="relative w-full h-96">
                      <Image
                        src="/images/blog1.png"
                        alt=""
                        layout="fill"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-20 pb-16">
                  <UiTitle className="!font-blog">
                    {post.content}
                  </UiTitle>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;

// <div className="bg-primary text-white">
// <div className="container mx-auto sm:px-24 px-6 py-10">
// <div className="flex flex-col items-center">
// <div className="flex flex-col gap-y-4 w-full">
// <UiCategory title="{singlePost?.category}" theme="light" />
// <UiTitle className="font-semibold text-2xl">
// {singlePost?.title}
// </UiTitle>
// <UiAuthor
// image="/images/author1.png"
// name={singlePost?.author}
// date={singlePost?.date}
// />
// <div className="relative w-full h-96">
// <Image
// src="/images/blog1.png"
// alt=""
// layout="fill"
// className="rounded-lg"
// />
// </div>
// </div>
// </div>
// <div className="mt-20 pb-16">
// <UiTitle className="!font-blog">{singlePost?.content}</UiTitle>
// </div>
// </div>
// </div>
