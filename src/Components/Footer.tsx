"use client";
import axios from "axios";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { footerType } from "./Admin/FooterSettings";
import { useEffect, useState } from "react";
const Footer = () => {
  const [setting, setSetting] = useState<footerType>({} as footerType);
  const getFooter = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/get-footer`
    );
    setSetting(response.data.footer[0]);
  };
  useEffect(() => {
    getFooter();
  }, []);
  return (
    <div className="bg-footer text-white pt-14 font-main">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="grid md:grid-cols-9 grid-cols-1 border-b pb-16 border-gray gap-y-10">
          <div className="md:col-start-1 md:col-end-4">
            <h4 className="text-white text-lg">About</h4>
            <p className="text-gray text-md mt-2 mb-4">{setting.about}</p>
            <span className="flex gap-1 mb-1">
              <b>Email:</b>
              <p className="text-gray">{setting.email}</p>
            </span>
            <span className="flex gap-1">
              <b>Phone:</b>
              <p className="text-gray">{setting.phone}</p>
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-7 flex flex-row">
            <div className="md:ml-auto mr-5">
              <h4 className="text-white text-lg mb-5">
                {setting.linkGroup1Title}
              </h4>
              <ul className="text-gray flex flex-col gap-y-2">
                <li>
                  <a href={`${setting.linkGroup1Link1}`}>
                    {setting.linkGroup1Text1}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup1Link2}`}>
                    {setting.linkGroup1Text2}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup1Link3}`}>
                    {setting.linkGroup1Text3}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup1Link4}`}>
                    {setting.linkGroup1Text4}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup1Link5}`}>
                    {setting.linkGroup1Text5}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup1Link6}`}>
                    {setting.linkGroup1Text6}
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mr-auto md:ml-5">
              <h4 className="text-white text-lg mb-5">
                {setting.linkGroup2Title}
              </h4>
              <ul className="text-gray flex flex-col gap-y-2">
                <li>
                  <a href={`${setting.linkGroup2Link1}`}>
                    {setting.linkGroup2Text1}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup2Link2}`}>
                    {setting.linkGroup2Text2}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup2Link3}`}>
                    {setting.linkGroup2Text3}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup2Link4}`}>
                    {setting.linkGroup2Text4}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup2Link5}`}>
                    {setting.linkGroup2Text5}
                  </a>
                </li>
                <li>
                  <a href={`${setting.linkGroup2Link6}`}>
                    {setting.linkGroup2Text6}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-section rounded-lg p-5 md:col-start-7 md:col-end-10">
            <div className="flex flex-col items-center">
              <h4 className="text-lg">Weekly Newslaetter</h4>
              <p className="text-gray text-sm">
                Get blog articles and offers vie email
              </p>
            </div>
            <form className="mt-10 flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg bg-primary text-gray p-4 pr-9 outline-none w-full"
                  required
                />
                <MdEmail
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-50"
                  size={20}
                />
              </div>
              <button className="w-full bg-secondary text-center rounded-lg py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 items-center justify-between pt-10 py-5">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Image
                src="/images/logoVector.png"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <div>
              <span className="flex">
                {setting.companyName}
              </span>
              <span className="flex gap-1">
               {setting.copyright}
              </span>
            </div>
          </div>
          <div>
            <ul className="flex text-gray gap-2 items-center">
              <li>
                <a href={`${setting.footerPage1Link}`}>{setting.footerPage1}</a>
              </li>
              <li className="border-x px-2 border-section">
                <a href={`${setting.footerPage2Link}`}>{setting.footerPage2}</a>
              </li>
              <li>
                <a href={`${setting.footerPage3Link}`}>{setting.footerPage2}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
