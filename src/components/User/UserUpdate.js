import { useFormik } from "formik";
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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByUserId, update } from "../../Redux/actions/userActions";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect } from "react";

function UserUpdate() {
  const dispacth = useDispatch();
  const [userId, setUserId] = useState("");
  const { user } = useSelector((state) => state.user);
  const toast = useToast();
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
      id: userId,
      surName: "",
      experience: "",
    },
    onSubmit: (values) => {
      dispacth(update(userId, values));
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
    AsyncStorage.getItem("userId").then((value) => {
      setUserId(value);
    });
    dispacth(getByUserId(userId));
    setValues({
      id: userId,
      surName: user.surName,
      experience: user.experience,
    });
  }, [userId,user]);
 
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
            value={values.surName}
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
