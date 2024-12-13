"use client";
import React, { useEffect, useState } from "react";
import UiBlogCard from "./Ui/UiBlogCard";
import axios from "axios";

export type blogPostType = {
  _id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  category: string;
};

type prostType = {
  filter?: string;
};
const replaceTurkishChars = (str: string): string => {
  const charMap: { [key: string]: string } = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "C",
    Ğ: "G",
    İ: "I",
    Ö: "O",
    Ş: "S",
    Ü: "U",
  };

  return [...str].map((char) => charMap[char] || char).join("");
};

const BlogPost = ({ filter }: prostType) => {
  const [blogPost, setBlogPost] = useState<blogPostType[]>(
    [] as blogPostType[]
  );
  const [categoryId, setCategoryId] = useState<string>("");

  const getBlogPost = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog/get-blog-list`
    );
    setBlogPost(response.data);
  };

  const getCategory = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/category-list`
    );
    setCategoryId(
      response.data
        .filter((item:{_id:string,categoryName:string}) => {
          return replaceTurkishChars(item.categoryName.toLowerCase()) == filter;
        })
        .map((item:{_id:string}) => item._id)
        .toString()
    );
  };

  useEffect(() => {
    getBlogPost();
    getCategory();
  }, [filter]);

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {!filter
          ? blogPost.map((post) => {
              return (
                <UiBlogCard
                  key={post._id}
                  cardImage="/images/blogcard1.png"
                  authorImage="/images/author1.png"
                  authorName={post.author}
                  category={post.category}
                  date={post.date}
                  link="#"
                  title={post.title}
                  id={post._id}
                />
              );
            })
          : blogPost
              .filter((post) => {
                return post.category === categoryId;
              })
              .map((post) => (
                <UiBlogCard
                  key={post._id}
                  cardImage="/images/blogcard1.png"
                  authorImage="/images/author1.png"
                  authorName={post.author}
                  category={post.category}
                  date={post.date}
                  link="#"
                  title={post.title}
                  id={post._id}
                />
              ))}
      </div>
    </div>
  );
};

export default BlogPost;
