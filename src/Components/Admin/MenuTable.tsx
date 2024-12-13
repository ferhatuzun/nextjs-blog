import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type propsType = {
  menu: {
    _id: string;
    menuName: string;
    menuLink: string;
  };
  setIsFinish: (setIsFinish: boolean) => void;
  isFinish: boolean;
};
const MenuTable = ({ menu, setIsFinish, isFinish }: propsType) => {
  const [updatedMenuName, setUpdatedMenuName] = useState<string>("");
  const [updateMenuLink, setUpdateMenuLink] = useState<string>("");

  useEffect(() => {
    setUpdatedMenuName(menu.menuName);
    setUpdateMenuLink(menu.menuLink);
  }, [menu]);

  const handleDeleteMenuById = async (id: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/delete-menu/${id}`,{withCredentials:true}
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
  const handleUpdateMenuById = async (id: string) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/update-menu/${id}`,
        {
          menuName: updatedMenuName,
          menuLink: updateMenuLink,
        },{withCredentials:true}
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
      <tr key={menu._id}>
        <td className="pb-3">{menu._id}</td>
        <td className="px-3 pb-3">
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-secondary outline-none py-1 px-2 rounded-md"
            value={updatedMenuName}
            onChange={(e) => setUpdatedMenuName(e.target.value)}
          />
        </td>
        <td className="px-3 pb-3">
          <input
            type="text"
            className="w-full bg-secondary outline-none py-1 px-2  rounded-md"
            value={updateMenuLink}
            onChange={(e) => setUpdateMenuLink(e.target.value)}
          />
        </td>
        <td className="pb-3">
          <div className="flex justify-center gap-4">
            <button
              className="bg-secondary py-1 px-3 rounded-lg"
              onClick={() => handleUpdateMenuById(menu._id)}
            >
              Güncelle
            </button>
            <button
              className="bg-secondary py-1 px-3 rounded-lg"
              onClick={() => handleDeleteMenuById(menu._id)}
            >
              Sil
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default MenuTable;
