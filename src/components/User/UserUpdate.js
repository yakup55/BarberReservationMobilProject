import { useFormik } from "formik";
import {
  Avatar,
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
import { useDispatch, useSelector } from "react-redux";
import validationSchema from "./validations";
import { getByUserId } from "../../Redux/actions/userActions";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
function UserUpdate() {
  const { user } = useSelector((state) => state.user);
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
      id: 1,
      surName: "",
    },
    onSubmit: (values) => {
      dispacth(update(id, values));
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByUserId(1));
    setValues({
      id: 1,
      surName: user.surName,
    });
  }, []);
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
          <Input value={user.name} isDisabled />
        </FormControl>
        <FormControl>
          <FormControl.Label>Kullanıcı Soyadınız</FormControl.Label>
          <Input
            id="surName"
            name="surName"
            onChangeText={handleChange("surName")}
            value={user.surName}
            onBlur={handleBlur("surName")}
          />
          {errors.surName && touched.surName && (
            <Text style={{ color: "red" }}>{errors.surName}</Text>
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label>Telefon Numaranızı Giriniz</FormControl.Label>
          <Input value={user.phoneNumber} isDisabled />
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

export default UserUpdate;
