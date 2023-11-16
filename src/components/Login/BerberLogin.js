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

function BerberLogin() {
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Berber Şifreniz</FormControl.Label>
            <Input type="password" />
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
          <Button mt="2" colorScheme="indigo">
            Giriş Yap
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default BerberLogin;
