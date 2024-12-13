import BlogPost from "@/Components/BlogPost";
import UiTitle from "@/Components/Ui/UiTitle";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto py-10">
        <UiTitle className="bg-primary text-center text-white text-3xl font-bold pb-10">
          All Posts
        </UiTitle>
        <BlogPost />
      </div>
    </div>
  );
};

export default page;
