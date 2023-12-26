import { useFormik } from "formik";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import BarberService from "../../Redux/services/barberService";
import { barberLogin } from "../../Redux/actions/barberActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setBarber } from "../../Redux/actions/authActions";
import validationSchema from "../Register/validations";
function BerberLogin() {
  const dispacth = useDispatch();
  const service = new BarberService();
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit: async (values) => {
        dispacth(barberLogin(values));
        const result = await service.barberLogin(values);
        console.log(result);
        if (result.status === 200) {
          const resp = result.data;
          const barberIdString = JSON.stringify(resp.barberId);
          await AsyncStorage.setItem("barberId", barberIdString);
          await AsyncStorage.setItem("userName", resp.userName);
          await AsyncStorage.setItem("surName", resp.surName);
          await AsyncStorage.setItem("phoneNumber", resp.phoneNumber);
          await AsyncStorage.setItem("image", resp.image);
          await AsyncStorage.setItem("expriences", resp.expriences);
          await AsyncStorage.setItem("message", resp.message);
          await AsyncStorage.setItem("accessToken", resp.accessToken);
          await AsyncStorage.setItem("isBarberLogin", "true");

          dispacth(
            setBarber({
              barberId: resp.barberId,
              userName: resp.userName,
              accessToken: resp.accessToken,
              isBarberLogin: true,
            })
          );
        }

        if (result.status === 401) {
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
            <FormControl.Label>Berber Adınız</FormControl.Label>
            <Input
              id="userName"
              name="userName"
              onChangeText={handleChange("userName")}
              value={values.userName}
              onBlur={handleBlur("userName")}
            />
            {errors.userName && touched.userName && (
              <Text style={{ color: "red" }}>{errors.userName}</Text>
            )}
          </FormControl>
          <FormControl>
            <FormControl.Label>Berber Şifreniz</FormControl.Label>
            <Input
              id="password"
              name="password"
              onChangeText={handleChange("password")}
              value={values.password}
              onBlur={handleBlur("password")}
              type="password"
            />
            {errors.password && touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Şifremi Unuttum
            </Link>
          </FormControl>
          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Giriş Yap
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default BerberLogin;
