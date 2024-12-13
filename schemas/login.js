import * as Yup from "yup"

export const loginSchema = Yup.object({
    email:Yup.string().required("Bu alan zorunludur !"),
    password:Yup.string().required("Bu alan zorunludur !")
})