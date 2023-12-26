import { useFormik } from "formik";
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  View,
} from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateBarberPassword } from "../Redux/actions/barberActions";
function AdminPasswordUpdate() {
  const [barberId, setBarberId] = useState("");
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, values, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        barberId: 0,
        oldPassword: "",
        newPassword: "",
      },
      onSubmit: (values) => {
        console.log(values);
        dispacth(updateBarberPassword(values));
      },
    });
  useEffect(() => {
    AsyncStorage.getItem("barberId").then((value) => {
      setBarberId(value);
    });
  }, []);

  return (
    <Center mt="50">
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <FormControl>
          <MaterialCommunityIcons
            style={{ marginLeft: 100 }}
            name="shield-lock"
            size={100}
            color="black"
          />
        </FormControl>
        <FormControl>
          <Input
            h="1"
            w="1"
           isReadOnly
           isDisabled
            id="barberId"
            name="barberId"
            onChangeText={handleChange("barberId")}
            value={(values.barberId = barberId)}
            onBlur={handleBlur("barberId")}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Eski Şifrenizi Giriniz</FormControl.Label>
          <Input
            id="oldPassword"
            name="oldPassword"
            onChangeText={handleChange("oldPassword")}
            value={values.oldPassword}
            onBlur={handleBlur("oldPassword")}
            placeholder="Eski Şifreniz"
          />
          {errors.oldPassword && touched.oldPassword && (
            <Text style={{ color: "red" }}>{errors.oldPassword}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label>Yeni Şifrenizi Giriniz</FormControl.Label>
          <Input
            id="newPassword"
            name="newPassword"
            onChangeText={handleChange("newPassword")}
            value={values.newPassword}
            onBlur={handleBlur("newPassword")}
            placeholder="Yeni Şifrenizi Giriniz"
          />
          {errors.newPassword && touched.newPassword && (
            <Text style={{ color: "red" }}>{errors.newPassword}</Text>
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

export default AdminPasswordUpdate;
