import { useNavigation } from "@react-navigation/native";
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
} from "native-base";
import React from "react";
function Register() {
  const navigation = useNavigation();
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Kullanıcı Soy Adınız</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Kullanıcı Telefon Numarınız</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Kullanıcı Şifreniz</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
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
