"use client";
import { useEffect, useState } from "react";
import UiInput from "../Ui/UiInput";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import CategoryTable from "./CategoryTable";

type categoryListType = {
  _id: string;
  categoryName: string;
  categoryLink: string;
};

const CategorySetting = () => {
  const [categoryName, setMenuName] = useState<string>("");
  // const [categoryLink, setMenuLink] = useState<string>("");
  const [isFinish, setIsFinish] = useState<boolean>(false);
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
}, [isFinish]);
  const handleCategoryAdd = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/new-category`,
        { categoryName },
        {
          withCredentials: true,
        }
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

  return (
    <div>
      <div className="w-96 bg-primary p-10 m-4 text-white rounded-lg">
        <h4 className="text-3xl">Ekle</h4>
        <form className="flex flex-col gap-2 my-4">
          <UiInput
            placeholder="Kategori Adı"
            value={(value) => setMenuName(value)}
            isFinish={isFinish}
          />
          {/* <UiInput
            placeholder="Kategori Linki"
            value={(value) => setMenuLink(value)}
            isFinish={isFinish}
          /> */}
          <button
            className="w-full bg-category border mt-4 text-center rounded-lg py-2"
            type="submit"
            onClick={handleCategoryAdd}
          >
            Kaydet
          </button>
        </form>
      </div>
      <div className="p-10 m-4 text-white bg-primary rounded-lg">
        <h4 className="text-3xl">Kategori İşlemleri</h4>
        <div className="flex flex-col  mt-10">
          <table>
            <thead>
              <tr>
                <th className="w-1/4 pb-3">İd</th>
                <th className="w-1/4 pb-3">Kategori Adı</th>
                {/* <th className="w-1/4 pb-3">Kategori Linki</th> */}
                <th className="w-1/4 pb-3">Aksiyonlar</th>
              </tr>
            </thead>
            {categoryList.map((item) => {
              return (
                <CategoryTable
                  category={item}
                  key={item._id}
                  setIsFinish={setIsFinish}
                  isFinish={isFinish}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategorySetting;
