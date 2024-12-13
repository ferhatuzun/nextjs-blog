import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogListTable from "./BlogListTable";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const [isFinish, setIsFinish] = useState<boolean>(false)

  const getBlogList = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog/get-blog-list`,
      { withCredentials: true }
    );
    setBlogList(response.data);
  };
  useEffect(() => {
    getBlogList();
  },[isFinish]);
  return (
    <div className="p-10 m-4 text-white bg-primary rounded-lg">
      <h4 className="text-3xl">Tüm Yazılar</h4>
      <div className="flex flex-col  mt-10">
        <table>
          <thead>
            <tr>
              <th className="w-1/4 pb-3">İd</th>
              <th className="w-1/4 pb-3">Yazar</th>
              <th className="w-1/4 pb-3">Yazı Başlığı</th>
              <th className="w-1/4 pb-3">İçerik</th>
            </tr>
          </thead>
          {blogList.map((item,index) => {
            return <BlogListTable blog={item} key={index} isFinish={isFinish} setIsFinish={setIsFinish}/>;
          })}
        </table>
      </div>
    </div>
  );
};

export default BlogList;
