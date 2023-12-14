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
import validationSchema from "./validations";
import { updateUserPassword } from "../../Redux/actions/userActions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function UserPasswordUpdate() {
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, values, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        userId: 0,
        oldPassword: "",
        newPassword: "",
      },
      onSubmit: (values) => {
        dispacth(updateUserPassword(values));
      },
      validationSchema,
    });
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

export default UserPasswordUpdate;
