// components/LayoutWrapper.js
"use client";

import { usePathname } from "next/navigation"; 
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type propsType = {
  children: ReactNode;
};

export default function LayoutWrapper({ children }: propsType) {
  const pathname = usePathname();

  // Admin sayfalarını kontrol et
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <ToastContainer />
        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
    </>
  );
}
