"use client";

import BlogList from "@/Components/Admin/BlogList";
import CategorySetting from "@/Components/Admin/CategorySetting";
import FooterSettings from "@/Components/Admin/FooterSettings";
import MenuSettings from "@/Components/Admin/MenuSettings";
import NewBlog from "@/Components/Admin/NewBlog";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const { push } = useRouter();
  const [panel, setPanel] = useState<number>(0);
  const checkSession = async () => {
    try {
      await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/check-session`,
        { withCredentials: true }
      );
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        push("/admin");
      }
    }
  };
  useEffect(() => {
    checkSession();
  }, [push]);
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      toast.success(response.data.message);
      push("/admin");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };
  return (
    <>
      <div className="flex">
        <div className="sticky left-0 top-0 h-screen w-72 bg-primary">
          <div className="p-7">
            <div className="relative w-full h-12">
              <Image src="/images/logo.png" alt="" fill={true} />
            </div>

            <div>
              <ul className="flex flex-col h-[calc(100vh_-_200px)] items-center justify-center mt-20 text-white font-main text-lg gap-y-2">
                <li
                  className={`${
                    panel == 0 && "bg-secondary"
                  }  rounded-lg py-1 w-full text-center`}
                >
                  <button onClick={() => setPanel(0)}>Menü Ayarları</button>
                </li>
                <li
                  className={`${
                    panel == 1 && "bg-secondary"
                  }  rounded-lg py-1 w-full text-center`}
                >
                  <button onClick={() => setPanel(1)}>Tüm Yazılar</button>
                </li>
                <li
                  className={`${
                    panel == 2 && "bg-secondary"
                  }  rounded-lg py-1 w-full text-center`}
                >
                  <button onClick={() => setPanel(2)}>Yazı Ekle</button>
                </li>
                <li
                  className={`${
                    panel == 3 && "bg-secondary"
                  }  rounded-lg py-1 w-full text-center`}
                >
                  <button onClick={() => setPanel(3)}>Footer</button>
                </li>
                <li
                  className={`${
                    panel == 4 && "bg-secondary"
                  }  rounded-lg py-1 w-full text-center`}
                >
                  <button onClick={() => setPanel(4)}>Kategori İşlemleri</button>
                </li>

                <li
                  className={`bg-section rounded-lg py-1 w-full text-center mt-auto`}
                >
                  <button onClick={handleLogout}>Çıkış Yap</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray w-[calc(100%_-_288px)] font-main">
          {panel == 0 && <MenuSettings />}
          {panel == 1 && <BlogList />}
          {panel == 2 && <NewBlog />}
          {panel == 3 && <FooterSettings />}
          {panel == 4 && <CategorySetting />}
        </div>
      </div>
    </>
  );
};

export default Page;
