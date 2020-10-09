import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Your password must be more than 8 literals')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
      'Password must consist: at least 1 number, uppercase and special char (@,!,#, etc).',
    )
    .required('Password is required'),
});

// export const passValidationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Email is invalid")
//     .required("Email is required")
// });

// export const applyCoderAndRestoreSchema = yup.object().shape({
//   code: yup.string().required("Code is required"),
//   newPassword: yup
//     .string()
//     .min(8, "Your new password must be more than 8 literals")
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
//       "New Password must consist: at least 1 number, uppercase and special char (@,!,#, etc)."
//     )
//     .required("New Password is required"),
//   confirmPassword: yup
//     .string()
//     .min(8, "Confirm password must be more than 8 literals")
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
//       "Confirm Password: at least 1 number, uppercase and special char (@,!,#, etc)."
//     )
//     .equalTo(yup.ref("newPassword"), "Passwords must match")
//     .required("Confirm Password is required")
// });

// export const signUpSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Name is required"),
//   email: yup
//     .string()
//     .email("Email is invalid")
//     .required("Email is required")
// });

// export const enterPasswordSchema = yup.object().shape({
//   password: yup
//     .string()
//     .min(8, "Your password must be more than 8 literals")
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
//       "Password must consist: at least 1 number, uppercase and special char (@,!,#, etc)"
//     )
//     .required("Password is required"),
//   repeatPass: yup
//     .string()
//     .min(8, "Your password must be more than 8 literals")
//     .equalTo(yup.ref("password"), "Passwords must match")
//     .required("Repeat password is required")
// });

// export const verificationScheme = yup.object().shape({
//   code: yup.string().required("Code is required")
// });

// export const changePasswordScheme = yup.object().shape({
//   oldPassword: yup
//     .string()
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
//       "Old Password: at least 1 number, uppercase and special char (@,!,#, etc)."
//     )
//     .required("Old password is required"),
//   newPassword: yup
//     .string()
//     .min(8, "Your new password must be more than 8 literals")
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
//       "New Password: at least 1 number, uppercase and special char (@,!,#, etc)."
//     )
//     .required("New Password is required"),
//   confirmPassword: yup
//     .string()
//     .equalTo(yup.ref("newPassword"), "Passwords must match")
//     .required("Confirm Password Required")
// });
