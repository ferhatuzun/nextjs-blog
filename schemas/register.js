import * as Yup from "yup"

export const registerSchema = Yup.object({
    registerEmail: Yup.string().required("Bu alan zorunludur !").min(10, "Eposta 10 karakterden az olamaz"),
    registerPassword: Yup.string().required("Bu alan zorunludur !").min(6, "şifreniz 3 karakterden az olamaz").max(30, "şifreniz 30 karakterden fazla olamaz"),
    confirmPassword: Yup.string().required("Bu alan zorunludur !").oneOf([Yup.ref("registerPassword"), null], "Şifreler uyuşmuyor")

})