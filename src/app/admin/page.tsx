"use client";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../../schemas/login";
import { registerSchema } from "../../../schemas/register";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

type loginType = {
  email: string;
  password: string;
};
type registerType = {
  registerEmail: string;
  registerPassword: string;
  confirmPassword: string;
};

const Page = () => {
  const [control, setControl] = useState<boolean>(false);
  const { push } = useRouter();

  const checkSession = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/check-session`,
        {
          withCredentials: true, // Oturum çerezi ile istek yapıyoruz
        }
      );

      if (response.data.isAuthenticated) {
        push("/admin/page");
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        push("/admin");
      }
    }
  };
  useEffect(() => {
    // Oturumun geçerli olup olmadığını kontrol etmek için backend'e istek atıyoruz

    checkSession();
  }, [push]);
  const handleLoginSubmit = async (values: loginType) => {
    try {
      const user = {
        email: values.email,
        password: values.password,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        user,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      push("admin/page");
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };
  const handleRegisterSubmit = async (values: registerType) => {
    try {
      const newUser: registerType = {
        registerEmail: values.registerEmail,
        registerPassword: values.registerPassword,
        confirmPassword: values.confirmPassword,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        newUser
      );
      toast.success(response.data.message);
      push("/admin/page");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
    }
  };
  return (
    <div className="bg-primary h-screen flex flex-col justify-center items-center text-white">
      {!control ? (
        <div>
          <Formik<loginType>
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleLoginSubmit}
            validationSchema={loginSchema}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form className="flex flex-col gap-y-3 w-72">
                <div className="flex flex-col gap-y-1">
                  <span>Email:</span>
                  <Field
                    type="text"
                    placeholder="Email"
                    className="py-2 px-3 rounded-lg outline-none text-black"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <span>Şifre:</span>
                  <Field
                    type="password"
                    placeholder="Şifre"
                    className="py-2 px-3 rounded-lg outline-none text-black"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-600">{errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-secondary rounded-lg py-2 font-semibold text-lg mt-3"
                >
                  Giriş Yap
                </button>
              </Form>
            )}
          </Formik>
          <p
            className="underline mt-2 cursor-pointer"
            onClick={() => setControl(true)}
          >
            Kayıt olmak için tıkla
          </p>
        </div>
      ) : (
        <div>
          <Formik<registerType>
            initialValues={{
              registerEmail: "",
              registerPassword: "",
              confirmPassword: "",
            }}
            onSubmit={handleRegisterSubmit}
            validationSchema={registerSchema}
          >
            {({ values, touched, errors }) => (
              <Form className="flex flex-col gap-y-3 w-72">
                <div className="flex flex-col gap-y-1">
                  <span>Email:</span>
                  <Field
                    type="email"
                    placeholder="Email"
                    className="py-2 px-3 rounded-lg outline-none text-black"
                    name="registerEmail"
                    value={values.registerEmail || ""}
                  />
                  {errors.registerEmail && touched.registerEmail && (
                    <p className="text-red-600">{errors.registerEmail}</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <span>Şifre:</span>
                  <Field
                    type="password"
                    placeholder="Şifre"
                    className="py-2 px-3 rounded-lg outline-none text-black"
                    name="registerPassword"
                    value={values.registerPassword || ""}
                  />
                  {errors.registerPassword && touched.registerPassword && (
                    <p className="text-red-600">{errors.registerPassword}</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <span>Şifre Tekrar:</span>
                  <Field
                    type="password"
                    placeholder="Şifre takrarı"
                    className="py-2 px-3 rounded-lg outline-none text-black"
                    name="confirmPassword"
                    value={values.confirmPassword || ""}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-secondary rounded-lg py-2 font-semibold text-lg mt-3"
                >
                  Kayıt Ol
                </button>
              </Form>
            )}
          </Formik>
          <p
            className="underline mt-2 cursor-pointer"
            onClick={() => setControl(false)}
          >
            Giriş yapmak için tıkla
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
