"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
type menuListType = {
  _id: string;
  menuName: string;
  menuLink: string;
};
const Header = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<menuListType[]>([]);
  const getMenuList = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/getMenu`,{withCredentials:true}
    );
    setMenuList(response.data);
  };
  useEffect(() => {
    getMenuList();
  }, []);
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex justify-between items-center text-white py-4">
        <div>
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt=""
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div>
          <ul
            className={`lg:flex lg:flex-row lg:static lg:items-center lg:gap-x-4 lg:text-xl lg:bg-transparent lg:p-0 lg:-translate-x-0 lg:-translate-y-0 fixed hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black z-50 p-20 rounded-lg flex-col gap-y-3 ${
              isModal && "!flex"
            }`}
          >
            {menuList.map((menu)=>{
              return (
                <li key={menu._id}>
                  <a href={menu.menuLink}>{menu.menuName}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <GiHamburgerMenu
          className="cursor-pointer block lg:hidden"
          onClick={() => setIsModal(!isModal)}
          size={25}
        />
        <div className="lg:block hidden">
          <form className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-section text-gray p-4 pr-9 outline-none"
            />
            <FaSearch
              className="absolute right-3 top-1/2 -translate-y-1/2"
              size={20}
            />
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
