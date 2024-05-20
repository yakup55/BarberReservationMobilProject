import { object, string, number } from "yup";

const validations = object({
  userName: string()
    .min(2, "En az 2 Karanter Olmalı")
    .max(20, "En Fazla 20 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
  surName: string()
    .min(2, "En az 2 Karanter Olmalı")
    .max(30, "En Fazla 30 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
  phoneNumber: number("Bu Alan Sayı İçermelidir").required(
    "Bu Alan Zorunludur"
  ),
  password: string()
    .min(3, "En az 3 Karanter Olmalı")
    .max(11, "En Fazla 11 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
});

export default validations;
