import { object, string, number, date } from "yup";

const validations = object({
  barberId: number().required("Bu Alan Zorunludur"),
  hourId: number().required("Bu Alan Zorunludur"),
  description: string()
    .min(5, "En az 5 Karanter Olmalı")
    .max(200, "En Fazla 200 Karakter İçermeli")
    .required("Bu Alan Zorunludur"),
});

export default validations;
