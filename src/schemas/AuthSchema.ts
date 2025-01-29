import * as Yup from "yup";

export const AuthSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(70, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum."),
    studentId: Yup.number()
        .max(11, "Must be 11 digits")
        .required("Required")
        .typeError("Student ID must be a number"),
    passingYear: Yup.number()
        .max(4, "Must be 4 digits")
        .required("Required")
        .typeError("Passing Year must be a number"),
    residentialAddress: Yup.string().required("Required"),
    professionalAddress: Yup.string().required("Required"),
    department: Yup.string().required("Required"),
});
