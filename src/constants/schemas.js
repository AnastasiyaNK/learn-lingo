import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Here must be your name"),

  email: yup
    .string()
    .required("Here must be your e-mail")
    .email("Invalid email"),

  password: yup
    .string()
    .min(8, "Invalid password (8-64 characters)")
    .max(64, "Invalid password (8-64 characters)"),
});
export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Here must be your e-mail")
    .email("Invalid email"),

  password: yup
    .string()
    .min(8, "Invalid password (8-64 characters)")
    .max(64, "Invalid password (8-64 characters)"),
});
export const bookTrialSchema = yup.object().shape({
  fullName: yup.string().required("Here must be your Full Name"),

  email: yup
    .string()
    .required("Here must be your e-mail")
    .email("Invalid email"),

  phoneNumber: yup.string().required("Here must be your Phone number"),

  reasonForLearning: yup
    .string()
    .required("Here must be your Reason for learning")
    .oneOf([
      "Career and business",
      "Lesson for kids",
      "Living abroad",
      "Exams and coursework",
      ,
      "Culture, travel or hobby",
    ]),
});
