import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  View,
  WarningOutlineIcon,
  useToast,
} from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import validationSchema from "../Contact/validations";
import { add } from "../../Redux/actions/contactActions";
function Contact() {
  const dispacth = useDispatch();
  const toast = useToast();
  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      description: "",
    },
    onSubmit: (values) => {
      dispacth(add(values));
      toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="3xl" mb={5}>
              Geri Bildiriminiz Alınmıştır
            </Box>
          );
        },
      });
    },
    validationSchema,
  });
  return (
    <View mt={10}>
      <Heading textAlign="center" fontStyle="italic" mb={2}>
        Öneri Şikayet Yap
      </Heading>
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <FormControl>
          <FormControl.Label>Adınızı Giriniz</FormControl.Label>
          <Input
            id="name"
            name="name"
            onChangeText={handleChange("name")}
            value={values.name}
            onBlur={handleBlur("name")}
            editable={!isSubmitting}
            size="xl"
            placeholder="Adınız"
          />
          {errors.name && touched.name && (
            <Text style={{ color: "red" }}>{errors.name}</Text>
          )}
        </FormControl>

        <FormControl>
          <FormControl.Label>Telefon Numaranızı Giriniz</FormControl.Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            onChangeText={handleChange("phoneNumber")}
            value={values.phoneNumber}
            onBlur={handleBlur("phoneNumber")}
            editable={!isSubmitting}
            size="xl"
            placeholder="Telefon Numarınız"
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label>Açıklama Ekleyeniz</FormControl.Label>
          <Input
            id="description"
            name="description"
            onChangeText={handleChange("description")}
            value={values.description}
            onBlur={handleBlur("description")}
            editable={!isSubmitting}
            size="xl"
            placeholder="Açıklama Ekleyeniz"
          />
          {errors.description && touched.description && (
            <Text style={{ color: "red" }}>{errors.description}</Text>
          )}
        </FormControl>
        <FormControl>
          <Button onPress={handleSubmit} colorScheme="green">
            Gönder
          </Button>
        </FormControl>
      </Stack>
    </View>
  );
}

export default Contact;
