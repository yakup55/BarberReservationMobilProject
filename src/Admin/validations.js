import { object, string } from "yup";

const validations = object({
  oldPassword: string()
    .min(3, "En az 3 Karanter Olmalı")
    .max(11, "En Fazla 11 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
  newPassword: string()
    .min(3, "En az 3 Karanter Olmalı")
    .max(11, "En Fazla 11 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
});

export default validations;
