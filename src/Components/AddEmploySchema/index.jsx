import * as Yup from "yup";

export const addEmploySchema = Yup.object({
  firstName: Yup.string().min(6).max(8).required("Please enter your name"),
  lastName: Yup.string().min(6).max(8).required("Please enter your name"),
  title: Yup.string().min(8).max(16).required("Please your title"),
  department: Yup.string()
    .min(12)
    .max(16)
    .required("Please enter your department"),
  hiringDate: Yup.string().max(12).required("please enter your Hriring Date"),
  currentSellery: Yup.number().required("please enter your current sellery"),
  note: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
