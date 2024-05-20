import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  Text,
  View,
  useToast,
} from "native-base";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getByUserId,
  updateUserPassword,
} from "../../Redux/actions/userActions";
import { useFormik } from "formik";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import validationSchema from "./validations";
import UserService from "../../Redux/services/userService";
function UserPasswordUpdate() {
  const service = new UserService();
  const [userId, setUserId] = useState("");
  const toast = useToast();
  const { handleSubmit, handleBlur, values, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        userId: 0,
        oldPassword: "",
        newPassword: "",
      },
      onSubmit: async (values) => {
        const result = await service.updateUserPassword(values);
        if (result.status === 400) {
          toast.show({
            render: () => {
              return (
                <Box bg="error.500" px="2" py="1" rounded="3xl" mb={5}>
                  Eski Şifreniz Yanlış
                </Box>
              );
            },
          });
        } else if (result.status === 200) {
          toast.show({
            render: () => {
              return (
                <Box bg="emerald.500" px="2" py="1" rounded="3xl" mb={5}>
                  Şifreniz Güncellenmiştir
                </Box>
              );
            },
          });
        }
      },
    });
  useEffect(() => {
    AsyncStorage.getItem("userId").then((value) => {
      setUserId(value);
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
            id="userId"
            name="userId"
            onChangeText={handleChange("userId")}
            onBlur={handleBlur("userId")}
            value={(values.userId = userId)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Eski Şifrenizi Giriniz</FormControl.Label>
          <Input
            id="oldPassword"
            name="oldPassword"
            onChangeText={handleChange("oldPassword")}
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
