import { useFormik } from "formik";
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  View,
  useToast,
} from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validationSchema from "./validations";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { update, getByBarberId } from "../Redux/actions/barberActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
function AdminUpdate() {
  const toast = useToast();
  const [barberId, setBarberId] = useState("");
  const { barber } = useSelector((state) => state.barber);
  const dispacth = useDispatch();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      id: barberId,
      surName: "",
      experience: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispacth(update(barberId, values));
      toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="3xl" mb={5}>
              Bilgileriniz Güncellenmiştir
            </Box>
          );
        },
      });
    },
  });
  useEffect(() => {
    AsyncStorage.getItem("barberId").then((value) => {
      setBarberId(value);
    });
    dispacth(getByBarberId(barberId));
    setValues({
      id: barberId,
      surName: barber.surName,
      experience: barber.experience,
    });
  }, [barber,barberId]);
  return (
    <Center mt="50">
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <FormControl>
          <FontAwesome5
            style={{ marginLeft: 100 }}
            name="user-edit"
            size={80}
            color="black"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Kullanıcı Adınız</FormControl.Label>
          <Input value={barber.userName} isDisabled />
        </FormControl>
        <FormControl>
          <FormControl.Label>Kullanıcı Soyadınız</FormControl.Label>
          <Input
            id="surName"
            name="surName"
            onChangeText={handleChange("surName")}
            value={values.surName}
            onBlur={handleBlur("surName")}
          />
          {errors.surName && touched.surName && (
            <Text style={{ color: "red" }}>{errors.surName}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label>Telefon Numaranızı Giriniz</FormControl.Label>
          <Input value={barber.phoneNumber} isDisabled />
        </FormControl>
        <FormControl>
          <FormControl.Label>Deneyim Yılı </FormControl.Label>
          <Input
            id="experience"
            name="experience"
            onChangeText={handleChange("experience")}
            value={values.experience}
            onBlur={handleBlur("experience")}
          />
          {errors.experience && touched.experience && (
            <Text style={{ color: "red" }}>{errors.experience}</Text>
          )}
        </FormControl>
        <FormControl>
          <Button onPress={handleSubmit} colorScheme="success">
            Güncelle
          </Button>
        </FormControl>
      </Stack>
    </Center>
  );
}

export default AdminUpdate;
