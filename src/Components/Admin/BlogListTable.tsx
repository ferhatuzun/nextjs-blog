import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type propsType = {
  blog: {
    _id: string;
    title: string;
    author: string;
    content: string;
  };
  setIsFinish: (setIsFinish: boolean) => void;
  isFinish: boolean;
};

const BlogListTable = ({ blog, isFinish, setIsFinish }: propsType) => {
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogAuthor, setBlogAuthor] = useState<string>("");
  const [blogContent, setBlogContent] = useState<string>("");
  useEffect(() => {
    setBlogTitle(blog.title);
    setBlogAuthor(blog.author);
    setBlogContent(blog.content);
  }, []);

  const handleDeleteBlogById = async (id: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog/delete-blog/${id}`,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setIsFinish(!isFinish);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };

  const handleUpdateBlogById = async (id: string) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog/update-blog/${id}`,
        { title: blogTitle, author: blogAuthor, content: blogContent },
        { withCredentials: true }
      );
      toast.success(response.data.message)
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };

  return (
    <tbody>
      <tr key={blog._id}>
        <td className="pb-3">{blog._id}</td>
        <td className="px-3 pb-3">
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-secondary outline-none py-1 px-2 rounded-md"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </td>
        <td className="px-3 pb-3">
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-secondary outline-none py-1 px-2 rounded-md"
            value={blogAuthor}
            onChange={(e) => setBlogAuthor(e.target.value)}
          />
        </td>
        <td className="px-3 pb-3 max-w-10">
          <textarea
            name=""
            id=""
            className="w-full bg-secondary outline-none py-1 px-2 rounded-md"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
          />
        </td>
        <td className="pb-3">
          <div className="flex justify-center gap-4">
            <button
              className="bg-secondary py-1 px-3 rounded-lg"
              onClick={() => handleUpdateBlogById(blog._id)}
            >
              Güncelle
            </button>
            <button
              className="bg-secondary py-1 px-3 rounded-lg"
              onClick={() => handleDeleteBlogById(blog._id)}
            >
              Sil
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default BlogListTable;
