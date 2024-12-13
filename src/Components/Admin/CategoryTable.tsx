import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type propsType = {
  category: {
    _id: string;
    categoryName: string;
    categoryLink: string;
  };
  setIsFinish: (setIsFinish: boolean) => void;
  isFinish: boolean;
};
const CategoryTable = ({ category, setIsFinish, isFinish }: propsType) => {
  const [updatedCategoryName, setUpdatedCategoryName] = useState<string>("");
  // const [updatedCategoryLink, setUpdateCategoryLink] = useState<string>("");

  useEffect(() => {
    setUpdatedCategoryName(category.categoryName);
    // setUpdateCategoryLink(category.categoryLink);
  }, [category]);

  const handleDeleteCategoryById = async (id: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/delete-category/${id}`,
        { withCredentials: true }
      );
      setIsFinish(!isFinish);
      toast.success(response.data.message);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };
  const handleUpdateCategoryById = async (id: string) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/update-category/${id}`,
        {
          categoryName: updatedCategoryName,
          // categoryLink: updatedCategoryLink,
        },
        { withCredentials: true }
      );
      toast.success(response.data.message);
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
      <tr key={category._id}>
        <td className="pb-3">{category._id}</td>
        <td className="px-3 pb-3">
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-secondary outline-none py-1 px-2 rounded-md"
            value={updatedCategoryName}
            onChange={(e) => setUpdatedCategoryName(e.target.value)}
          />
        </td>
        {/* <td className="px-3 pb-3">
          <input
            type="text"
            className="w-full bg-secondary outline-none py-1 px-2  rounded-md"
            value={updatedCategoryLink}
            onChange={(e) => setUpdateCategoryLink(e.target.value)}
          />
        </td> */}
        <td className="pb-3">
          <div className="flex justify-center gap-4">
            <button
              className="bg-secondary py-1 px-3 rounded-lg"
              onClick={() => handleUpdateCategoryById(category._id)}
            >
              Güncelle
            </button>
            <button
              className="bg-secondary py-1 px-3 rounded-lg"
              onClick={() => handleDeleteCategoryById(category._id)}
            >
              Sil
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CategoryTable;
