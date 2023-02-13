import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um email válido!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "No mínimo 8 digitos")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial"),
});

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .email("Insira um email válido!")
    .required("Email obrigatório!"),
  phone: yup
    .string()
    .required("Contato obrigatório!")
    .min(11, "Número com 11 digitos")
    .matches(/[1-9]{2}9[1-9]\d{4}/, "Somente numeros com DDD"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .min(8, "No mínimo 8 digitos"),
  passwordConfirm: yup
    .string()
    .required("Confirme sua  senha")
    .oneOf([yup.ref("password")], "Senha diferente"),
});

export const schemaRegisterContact = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .email("Insira um email válido!")
    .required("Email obrigatório!"),
  phone: yup
    .string()
    .required("Contato obrigatório!")
    .min(11, "Número com 11 digitos")
    .matches(/[1-9]{2}9[1-9]\d{4}/, "Somente numeros com DDD"),
});
