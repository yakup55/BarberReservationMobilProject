import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  useToast,
} from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import AuthService from "../../Redux/services/authService";
import { login, setUser } from "../../Redux/actions/authActions";
import { useFormik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import validationSchema from "../Register/validations";
function Login() {
  const dispacth = useDispatch();
  const service = new AuthService();
  const navigation = useNavigation();
  const toast = useToast();
  const {
    handleSubmit,
    values,
    handleChange,
    touched,
    errors,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispacth(login(values));
      const result = await service.login(values);
      if (result.status === 200) {
        toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="3xl" mb={5}>
                Giriş Başarılı
              </Box>
            );
          },
        });
      }
      const resp = result.data;

      const userIdString = JSON.stringify(resp.userId);
      await AsyncStorage.setItem("userId", userIdString);
      await AsyncStorage.setItem("userName", resp.userName);
      await AsyncStorage.setItem("surName", resp.surName);
      await AsyncStorage.setItem("phoneNumber", resp.phoneNumber);
      await AsyncStorage.setItem("message", resp.message);
      await AsyncStorage.setItem("accessToken", resp.accessToken);
      await AsyncStorage.setItem("refreshToken", resp.refreshToken);
      await AsyncStorage.setItem("isLogin", "true");
      dispacth(
        setUser({
          userId: resp.userId,
          userName: resp.userName,
          accessToken: resp.accessToken,
          isLogin: true,
        })
      );
      if (result.status === 403) {
        toast.show({
          render: () => {
            return (
              <Box bg="danger.500" px={2} py={1} rounded={"3xl"} mb={5}>
                Giriş Başarısız
              </Box>
            );
          },
        });
      }
      
    },
  });
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
          Devam Etmek İçin Lütfen Oturum Açın
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
          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Giriş Yap
          </Button>
          <Button
            onPress={() => navigation.navigate("BerberLogin")}
            mt="2"
            colorScheme="indigo"
          >
            Berber Girişi
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
