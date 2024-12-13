import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type categoryListType = {
  _id: string;
  categoryName: string;
  categoryLink: string;
};
const NewBlog = () => {
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogContent, setBlogContent] = useState<string>("");
  const [blogAuthor, setBlogAuthor] = useState<string>("");
  const [blogCategory, setBlogCategory] = useState<string>("")
  const [categoryList, setCategoryList] = useState<categoryListType[]>([]);

  const getCategoryList = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/category-list`,
      {
        withCredentials: true,
      }
    );
    setCategoryList(response.data);
  };
  useEffect(() => {
    getCategoryList();
}, []);
  const handleClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog/new-blog`,
        { blogTitle,blogAuthor,blogContent,blogCategory},
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setBlogTitle("");
      setBlogContent("");
      setBlogAuthor("");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };
  return (
    <div className="text-white">
      <form>
        <div className="bg-category p-10 m-4 text-white rounded-lg grid grid-cols-2 gap-x-10">
          <div>
            <h4 className="text-3xl mb-4">Başlık</h4>
            <input
              type="text"
              placeholder="Yazı Başlığı"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-3xl mb-4">Yazar</h4>
            <input
              type="text"
              placeholder="Yazar"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={blogAuthor}
              onChange={(e) => setBlogAuthor(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-3xl mb-4 mt-4">Kategori</h4>
            <select  className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white" onChange={(e)=>setBlogCategory(e.target.value)}>
              <option value="">Bir kategori seçiniz</option>
              {categoryList.map((category)=>{
                return (
                  <option key={category._id} value={category._id}>{category.categoryName}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="bg-category p-10 m-4 text-white rounded-lg">
          <h4 className="text-3xl mb-4">İçerik</h4>
          <textarea
            placeholder="Yazı içeriği"
            className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
            required
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            rows={10}
          />
        </div>
        <div className=" flex ml-auto mr-4 text-white rounded-lg w-40">
          <button
            className="bg-footer rounded-lg w-full py-2 px-3"
            onClick={handleClick}
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
