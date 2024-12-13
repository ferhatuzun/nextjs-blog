import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export type footerType = {
  about: string;
  email: string;
  phone: string;
  linkGroup1Title: string;
  linkGroup1Text1: string;
  linkGroup1Text2: string;
  linkGroup1Text3: string;
  linkGroup1Text4: string;
  linkGroup1Text5: string;
  linkGroup1Text6: string;
  linkGroup1Link1: string;
  linkGroup1Link2: string;
  linkGroup1Link3: string;
  linkGroup1Link4: string;
  linkGroup1Link5: string;
  linkGroup1Link6: string;
  linkGroup2Title: string;
  linkGroup2Text1: string;
  linkGroup2Text2: string;
  linkGroup2Text3: string;
  linkGroup2Text4: string;
  linkGroup2Text5: string;
  linkGroup2Text6: string;
  linkGroup2Link1: string;
  linkGroup2Link2: string;
  linkGroup2Link3: string;
  linkGroup2Link4: string;
  linkGroup2Link5: string;
  linkGroup2Link6: string;
  companyName: string;
  copyright: string;
  footerPage1: string;
  footerPage2: string;
  footerPage3: string;
  footerPage1Link:string,
  footerPage2Link:string,
  footerPage3Link:string,
};

const FooterSettings = () => {
  const [about, setAbout] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [linkGroup1Title, setLinkGroup1Title] = useState<string>("");
  const [linkGroup1Text1, setLinkGroup1Text1] = useState<string>("");
  const [linkGroup1Text2, setLinkGroup1Text2] = useState<string>("");
  const [linkGroup1Text3, setLinkGroup1Text3] = useState<string>("");
  const [linkGroup1Text4, setLinkGroup1Text4] = useState<string>("");
  const [linkGroup1Text5, setLinkGroup1Text5] = useState<string>("");
  const [linkGroup1Text6, setLinkGroup1Text6] = useState<string>("");
  const [linkGroup1Link1, setLinkGroup1Link1] = useState<string>("");
  const [linkGroup1Link2, setLinkGroup1Link2] = useState<string>("");
  const [linkGroup1Link3, setLinkGroup1Link3] = useState<string>("");
  const [linkGroup1Link4, setLinkGroup1Link4] = useState<string>("");
  const [linkGroup1Link5, setLinkGroup1Link5] = useState<string>("");
  const [linkGroup1Link6, setLinkGroup1Link6] = useState<string>("");
  const [linkGroup2Title, setLinkGroup2Title] = useState<string>("");
  const [linkGroup2Text1, setLinkGroup2Text1] = useState<string>("");
  const [linkGroup2Text2, setLinkGroup2Text2] = useState<string>("");
  const [linkGroup2Text3, setLinkGroup2Text3] = useState<string>("");
  const [linkGroup2Text4, setLinkGroup2Text4] = useState<string>("");
  const [linkGroup2Text5, setLinkGroup2Text5] = useState<string>("");
  const [linkGroup2Text6, setLinkGroup2Text6] = useState<string>("");
  const [linkGroup2Link1, setLinkGroup2Link1] = useState<string>("");
  const [linkGroup2Link2, setLinkGroup2Link2] = useState<string>("");
  const [linkGroup2Link3, setLinkGroup2Link3] = useState<string>("");
  const [linkGroup2Link4, setLinkGroup2Link4] = useState<string>("");
  const [linkGroup2Link5, setLinkGroup2Link5] = useState<string>("");
  const [linkGroup2Link6, setLinkGroup2Link6] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [copyright, setCopyright] = useState<string>("");
  const [footerPage1, setFooterPage1] = useState<string>("");
  const [footerPage2, setFooterPage2] = useState<string>("");
  const [footerPage3, setFooterPage3] = useState<string>("");
  const [footerPage1Link, setFooterPage1Link] = useState<string>("")
  const [footerPage2Link, setFooterPage2Link] = useState<string>("")
  const [footerPage3Link, setFooterPage3Link] = useState<string>("")

  const [settingId, setSettingId] = useState<string>("");
  const getFooterSettings = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/setting/get-footer`,
      { withCredentials: true }
    );
    setSettingId(response.data.footer[0]._id);
    const setting: footerType = response.data.footer[0];
    setAbout(setting.about);
    setEmail(setting.email);
    setPhone(setting.phone);
    setLinkGroup1Title(setting.linkGroup1Title);
    setLinkGroup1Text1(setting.linkGroup1Text1);
    setLinkGroup1Text2(setting.linkGroup1Text2);
    setLinkGroup1Text3(setting.linkGroup1Text3);
    setLinkGroup1Text4(setting.linkGroup1Text4);
    setLinkGroup1Text5(setting.linkGroup1Text5);
    setLinkGroup1Text6(setting.linkGroup1Text6);
    setLinkGroup1Link1(setting.linkGroup1Text1);
    setLinkGroup1Link2(setting.linkGroup1Link2);
    setLinkGroup1Link3(setting.linkGroup1Link3);
    setLinkGroup1Link4(setting.linkGroup1Link4);
    setLinkGroup1Link5(setting.linkGroup1Link5);
    setLinkGroup1Link6(setting.linkGroup1Link6);
    setLinkGroup2Title(setting.linkGroup2Title);
    setLinkGroup2Text1(setting.linkGroup2Text1);
    setLinkGroup2Text2(setting.linkGroup2Text2);
    setLinkGroup2Text3(setting.linkGroup2Text3);
    setLinkGroup2Text4(setting.linkGroup2Text4);
    setLinkGroup2Text5(setting.linkGroup2Text5);
    setLinkGroup2Text6(setting.linkGroup2Text6);
    setLinkGroup2Link1(setting.linkGroup2Text1);
    setLinkGroup2Link2(setting.linkGroup2Link2);
    setLinkGroup2Link3(setting.linkGroup2Link3);
    setLinkGroup2Link4(setting.linkGroup2Link4);
    setLinkGroup2Link5(setting.linkGroup2Link5);
    setLinkGroup2Link6(setting.linkGroup2Link6);
    setCompanyName(setting.companyName);
    setCopyright(setting.copyright);
    setFooterPage1(setting.footerPage1);
    setFooterPage2(setting.footerPage2);
    setFooterPage3(setting.footerPage3);
    setFooterPage1Link(setting.footerPage1Link)
    setFooterPage2Link(setting.footerPage2Link)
    setFooterPage3Link(setting.footerPage3Link)
  };

  useEffect(() => {
    getFooterSettings();
  }, []);

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/setting/update-footer/${id}`,
        {
          about,
          email,
          phone,
          linkGroup1Title,
          linkGroup1Text1,
          linkGroup1Text2,
          linkGroup1Text3,
          linkGroup1Text4,
          linkGroup1Text5,
          linkGroup1Text6,
          linkGroup1Link1,
          linkGroup1Link2,
          linkGroup1Link3,
          linkGroup1Link4,
          linkGroup1Link5,
          linkGroup1Link6,
          linkGroup2Title,
          linkGroup2Text1,
          linkGroup2Text2,
          linkGroup2Text3,
          linkGroup2Text4,
          linkGroup2Text5,
          linkGroup2Text6,
          linkGroup2Link1,
          linkGroup2Link2,
          linkGroup2Link3,
          linkGroup2Link4,
          linkGroup2Link5,
          linkGroup2Link6,
          companyName,
          copyright,
          footerPage1,
          footerPage2,
          footerPage3,
          footerPage1Link,
          footerPage2Link,
          footerPage3Link
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
    <form>
      <div className="bg-category p-10 m-4 rounded-lg text-white">
        <h4 className="text-3xl mb-6">Footer Ayarları</h4>
        {/* about email telefon ayarları */}
        <div className=" text-white rounded-lg grid grid-cols-3 gap-x-10">
          <div>
            <h4 className="text-lg mb-4">About</h4>
            <textarea
              placeholder="About"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Email</h4>
            <input
              type="text"
              placeholder="Email adresiniz"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Telefon</h4>
            <input
              type="text"
              placeholder="Telefon numaranız"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* link group 1 ayarları */}
      <div className="bg-category p-10 m-4 rounded-lg text-white">
        <div className="mb-10">
          <h4 className="text-3xl font-bold mb-4">Link Grup 1</h4>
          <input
            type="text"
            placeholder="Grup 1 Title"
            className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
            required
            value={linkGroup1Title}
            onChange={(e) => setLinkGroup1Title(e.target.value)}
          />
        </div>
        <div className=" text-white rounded-lg grid grid-cols-2 gap-x-10 gap-y-3">
          <div>
            <h4 className="text-lg mb-4">Link 1 Text</h4>
            <input
              type="text"
              placeholder="Link 1 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Text1}
              onChange={(e) => setLinkGroup1Text1(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 1 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Link1}
              onChange={(e) => setLinkGroup1Link1(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 2 Text</h4>
            <input
              type="text"
              placeholder="Link 2 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Text2}
              onChange={(e) => setLinkGroup1Text2(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 2 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Link2}
              onChange={(e) => setLinkGroup1Link2(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 3 Text</h4>
            <input
              type="text"
              placeholder="Link 3 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Text3}
              onChange={(e) => setLinkGroup1Text3(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 3 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Link3}
              onChange={(e) => setLinkGroup1Link3(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 4 Text</h4>
            <input
              type="text"
              placeholder="Link 3 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Text4}
              onChange={(e) => setLinkGroup1Text4(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 4 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Link4}
              onChange={(e) => setLinkGroup1Link4(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 5 Text</h4>
            <input
              type="text"
              placeholder="Link 5 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Text5}
              onChange={(e) => setLinkGroup1Text5(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 5 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Link5}
              onChange={(e) => setLinkGroup1Link5(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 6 Text</h4>
            <input
              type="text"
              placeholder="Link 6 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Text6}
              onChange={(e) => setLinkGroup1Text6(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 6 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup1Link6}
              onChange={(e) => setLinkGroup1Link6(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* link group 2 ayarları */}
      <div className="bg-category p-10 m-4 rounded-lg text-white">
        <div className="mb-10">
          <h4 className="text-3xl font-bold mb-4">Link Grup 2</h4>
          <input
            type="text"
            placeholder="Grup 2 Title"
            className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
            required
            value={linkGroup2Title}
            onChange={(e) => setLinkGroup2Title(e.target.value)}
          />
        </div>
        <div className=" text-white rounded-lg grid grid-cols-2 gap-x-10 gap-y-3">
          <div>
            <h4 className="text-lg mb-4">Link 1 Text</h4>
            <input
              type="text"
              placeholder="Link 1 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Text1}
              onChange={(e) => setLinkGroup2Text1(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 1 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Link1}
              onChange={(e) => setLinkGroup2Link1(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 2 Text</h4>
            <input
              type="text"
              placeholder="Link 2 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Text2}
              onChange={(e) => setLinkGroup2Text2(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 2 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Link2}
              onChange={(e) => setLinkGroup2Link2(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 3 Text</h4>
            <input
              type="text"
              placeholder="Link 3 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Text3}
              onChange={(e) => setLinkGroup2Text3(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 3 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Link3}
              onChange={(e) => setLinkGroup2Link3(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 4 Text</h4>
            <input
              type="text"
              placeholder="Link 3 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Text4}
              onChange={(e) => setLinkGroup2Text4(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 4 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Link4}
              onChange={(e) => setLinkGroup2Link4(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 5 Text</h4>
            <input
              type="text"
              placeholder="Link 5 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Text5}
              onChange={(e) => setLinkGroup2Text5(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 5 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Link5}
              onChange={(e) => setLinkGroup2Link5(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 6 Text</h4>
            <input
              type="text"
              placeholder="Link 6 Text"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Text6}
              onChange={(e) => setLinkGroup2Text6(e.target.value)}
            />
          </div>
          <div>
            <h4 className="text-lg mb-4">Link 6 Link</h4>
            <input
              type="text"
              placeholder="Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={linkGroup2Link6}
              onChange={(e) => setLinkGroup2Link6(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* copyright ayarları */}
      <div className="bg-category p-10 m-4 rounded-lg text-white">
        <h4 className="text-3xl font-bold mb-6">Copyright Ayarları</h4>
        <div className=" text-white rounded-lg grid grid-cols-2 gap-x-10 gap-y-0">
          <div className="mb-5">
            <h4 className="text-lg mb-2">Firma Adı</h4>
            <input
              type="text"
              placeholder="Firma Adı"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Copyright</h4>
            <input
              type="text"
              placeholder="Copyright"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={copyright}
              onChange={(e) => setCopyright(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Footer Page 1</h4>
            <input
              type="text"
              placeholder="Footer Page 1"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={footerPage1}
              onChange={(e) => setFooterPage1(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Footer Page 1 Link</h4>
            <input
              type="text"
              placeholder="Footer Page 1 Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={footerPage1Link}
              onChange={(e) => setFooterPage1Link(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Footer Page 2</h4>
            <input
              type="text"
              placeholder="Footer Page 2"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={footerPage2}
              onChange={(e) => setFooterPage2(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Footer Page 2 Link</h4>
            <input
              type="text"
              placeholder="Footer Page 2 Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={footerPage2Link}
              onChange={(e) => setFooterPage2Link(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Footer Page 3</h4>
            <input
              type="text"
              placeholder="Footer Page 3"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={footerPage3}
              onChange={(e) => setFooterPage3(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <h4 className="text-lg mb-2">Footer Page 3 Link</h4>
            <input
              type="text"
              placeholder="Footer Page 3 Link"
              className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
              required
              value={footerPage3Link}
              onChange={(e) => setFooterPage3Link(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className=" flex ml-auto mx-4 my-4 text-white rounded-lg w-40">
        <button
          className="bg-footer rounded-lg w-full py-2 px-3"
          onClick={(e) => handleUpdate(e, settingId)}
        >
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default FooterSettings;
