"use client";
import { useEffect, useState } from "react";
import UiInput from "../Ui/UiInput";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import MenuTable from "./MenuTable";

type menuListType = {
  _id: string;
  menuName: string;
  menuLink: string;
};

const MenuSettings = () => {
  const [menuName, setMenuName] = useState<string>("");
  const [menuLink, setMenuLink] = useState<string>("");
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<menuListType[]>([]);
  const getMenuList = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/getMenu`,{
        withCredentials:true
      }
    );
    setMenuList(response.data);
  };
  useEffect(() => {
    getMenuList();
  }, [isFinish]);
  const handleCategoryAdd = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/newMenu`,
        { menuName, menuLink },
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsFinish(!isFinish);
    } catch (err:unknown) {
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
            placeholder="Menu Adı"
            value={(value) => setMenuName(value)}
            isFinish={isFinish}
          />
          <UiInput
            placeholder="Menu Linki"
            value={(value) => setMenuLink(value)}
            isFinish={isFinish}
          />
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
        <h4 className="text-3xl">Menü ayarları</h4>
        <div className="flex flex-col  mt-10">
          <table>
            <thead>
              <tr>
                <th className="w-1/4 pb-3">İd</th>
                <th className="w-1/4 pb-3">Menu Adı</th>
                <th className="w-1/4 pb-3">Menu Linki</th>
                <th className="w-1/4 pb-3">Aksiyonlar</th>
              </tr>
            </thead>
              {menuList.map((item) => {
                return <MenuTable menu={item} key={item._id} setIsFinish={setIsFinish} isFinish={isFinish}/>
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuSettings;
