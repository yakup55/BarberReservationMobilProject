import { object, string, number } from "yup";

const validations = object({
  name: string()
    .min(2, "En az 2 Karanter Olmalı")
    .max(20, "En Fazla 20 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
  phoneNumber: number("Bu Alan Sayı İçermelidir").required(
    "Bu Alan Zorunludur"
  ),
  description: string()
    .min(2, "En az 2 Karanter Olmalı")
    .max(200, "En Fazla 200 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
});

export default validations;
