import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  HStack,
  Heading,
  Input,
  Pressable,
  ScrollView,
  Spacer,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByUserId } from "../../Redux/actions/userActions";
function UserHome() {
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getByUserId(1));
  }, []);
  console.log(AsyncStorage.getAllKeys());
  return (
    <>
      <Container mt={30} margin="auto" display="flex">
        <FontAwesome
          style={{ marginLeft: 100 }}
          name="user-circle-o"
          size={100}
          color="black"
        />
        <VStack mt={4} width="300" mx="3" maxW="300px">
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Adınız Soyadınız
            </FormControl.Label>
            <Input value={user.name} isDisabled />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Telefon Numaranız{" "}
            </FormControl.Label>
            <Input value={user.phoneNumber} isDisabled />
          </FormControl>
        </VStack>
      </Container>

      <>
        <Heading mt={5} textAlign="center" fontStyle="italic" mb={2}>
          Randevularım
        </Heading>
        <ScrollView h="300" horizontal={true}>
          <Box mb={10} mt={10} alignItems="center">
            <HStack space={3} justifyContent="center">
              <Center mt={5} h="100" w="200" rounded="2xl" shadow={2}>
                <Box alignItems="center">
                  <Pressable
                    ml={210}
                    w={500}
                    h={200}
                    rounded="8"
                    overflow="hidden"
                    borderWidth="1"
                    borderColor="coolGray.300"
                    maxW="96"
                    shadow="3"
                    bg="coolGray.100"
                    p="5"
                  >
                    <Box>
                      <HStack alignItems="center">
                        <Badge
                          colorScheme="darkBlue"
                          _text={{
                            color: "white",
                          }}
                          variant="solid"
                          rounded="4"
                        >
                          Yakup Yıldırım
                        </Badge>
                        <Spacer />
                        <Text fontSize={13} color="coolGray.800">
                          13.12.2023
                        </Text>
                      </HStack>
                      <Text
                        color="coolGray.800"
                        mt="3"
                        fontWeight="medium"
                        fontSize="xl"
                      >
                        Pazartesi
                      </Text>
                      <Text mt="2" fontSize="sm" color="coolGray.700">
                        Berber randevusu Alınmıştır en kısa zamanda
                        onaylancaktır
                      </Text>
                      <Flex>
                        <Button colorScheme="red" mt={2}>
                          İptal Et
                        </Button>
                      </Flex>
                    </Box>
                  </Pressable>
                </Box>
              </Center>
            </HStack>
          </Box>
        </ScrollView>
      </>
    </>
  );
}

export default UserHome;
