import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import {
  AddIcon,
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  View,
  WarningOutlineIcon,
  useToast,
} from "native-base";
import React from "react";
import AuthService from "../../Redux/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getList6 } from "../../Redux/actions/userActions";
import validationSchema from "./validations";
function Register() {
  const service = new AuthService();
  const navigation = useNavigation();
  const { users } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const toast = useToast();
  const {
    handleSubmit,
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      userName: "",
      surName: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      const result = service.register(values);
      await new Promise((r) => setTimeout(r, 100));
      if (users.find((x) => x.phoneNumber === values.phoneNumber)) {
        toast.show({
          render: () => {
            return (
              <Box bg="danger.500" px="2" py="1" rounded="3xl" mb={5}>
                Bu telefon numarası kayıtlıdır
              </Box>
            );
          },
        });
      } else if (users.find((x) => x.name === values.userName)) {
        toast.show({
          render: () => {
            return (
              <Box bg="danger.500" px="2" py="1" rounded="3xl" mb={5}>
                Bu kullanıcı adı kayıtlıdır
              </Box>
            );
          },
        });
      } else if (result.status === 400) {
        toast.show({
          render: () => {
            return (
              <Box bg="danger.500" px="2" py="1" rounded="3xl" mb={5}>
                Sistemsel hata oluştu tekrar deneyiniz
              </Box>
            );
          },
        });
      } else if (result.status === 201) {
        toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="3xl" mb={5}>
                Kaydınız başarılı bir şekilde oluşturulmuştur
              </Box>
            );
          },
        });
      }
    },
    validationSchema,
  });

  useEffect(() => {
    dispacth(getList6());
  }, []);
  console.log(users)
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Hoş Geldin
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Devam Etmek İçin Lütfen Kayıt Olun
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Kullanıcı Adınız</FormControl.Label>
            <Input
              id="userName"
              name="userName"
              onChangeText={handleChange("userName")}
              value={values.userName}
              onBlur={handleBlur("userName")}
              editable={!isSubmitting}
            />
            {errors.userName && touched.userName && (
              <Text style={{ color: "red" }}>{errors.userName}</Text>
            )}
          </FormControl>
          <FormControl>
            <FormControl.Label>Kullanıcı Soy Adınız</FormControl.Label>
            <Input
              id="surName"
              name="surName"
              onChangeText={handleChange("surName")}
              value={values.surName}
              onBlur={handleBlur("surName")}
              editable={!isSubmitting}
            />
            {errors.surName && touched.surName && (
              <Text style={{ color: "red" }}>{errors.surName}</Text>
            )}
          </FormControl>
          <FormControl>
            <FormControl.Label>Kullanıcı Telefon Numarınız</FormControl.Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              onChangeText={handleChange("phoneNumber")}
              value={values.phoneNumber}
              onBlur={handleBlur("phoneNumber")}
              editable={!isSubmitting}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
            )}
          </FormControl>
          <FormControl>
            <FormControl.Label>Kullanıcı Şifreniz</FormControl.Label>
            <Input
              id="password"
              name="password"
              onChangeText={handleChange("password")}
              value={values.password}
              onBlur={handleBlur("password")}
              type="password"
              editable={!isSubmitting}
            />
            {errors.password && touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
          </FormControl>
          <Button
            onPress={handleSubmit}
            mt="2"
            colorScheme="indigo"
            disabled={isSubmitting}
          >
            Kayıt Ol
          </Button>
          <Button
            onPress={() => navigation.navigate("Login")}
            mt="2"
            colorScheme="indigo"
          >
            Giriş Yap
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Register;
