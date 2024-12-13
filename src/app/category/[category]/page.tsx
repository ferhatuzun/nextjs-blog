"use client"
import BlogPost from "@/Components/BlogPost";
import UiTitle from "@/Components/Ui/UiTitle";
import { useEffect, useState } from "react";

const Page = ({params}:{params:{category:string}}) => {
  const [category, setFilter] = useState<string>()
  const getParams = async ()=>{
    const {category} = await params
    setFilter(category)
  }
  useEffect(()=>{
    getParams()
  },[category])
  return (
    <div className="bg-primary text-white px-5 sm:px-0">
      <div className="p-20">
      <UiTitle className="font-semibold text-2xl mb-5" >{category?.toUpperCase()} YAZILARI</UiTitle>

        <BlogPost filter={category} />
      </div>
    </div>
  );
};

export default Page;
