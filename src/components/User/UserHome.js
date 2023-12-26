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
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserId } from "../../Redux/actions/reservationActions";
function UserHome() {
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  useEffect(() => {
    dispacth(getUserId(userId));
    AsyncStorage.getItem("userName").then((value) => {
      // AsyncStorage'den alınan değeri state'e atama
      setUserName(value);
    });
    AsyncStorage.getItem("surName").then((value) => {
      // AsyncStorage'den alınan değeri state'e atama
      setSurName(value);
    });
    AsyncStorage.getItem("phoneNumber").then((value) => {
      // AsyncStorage'den alınan değeri state'e atama
      setPhoneNumber(value);
    });
    AsyncStorage.getItem("userId").then((value) => {
      setUserId(value);
    });
  }, []);
  const handleLogout = async () => {
    AsyncStorage.removeItem("accessToken");
    AsyncStorage.removeItem("isLogin");
    AsyncStorage.removeItem("message");
    AsyncStorage.removeItem("phoneNumber");
    AsyncStorage.removeItem("refreshToken");
    AsyncStorage.removeItem("surName");
    AsyncStorage.removeItem("userId");
    AsyncStorage.removeItem("userName");
  };
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
            <Input value={`${userName} ${surName}`} isDisabled />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Telefon Numaranız{" "}
            </FormControl.Label>
            <Input value={phoneNumber} isDisabled />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Button colorScheme="red" onPress={handleLogout}>
                Çıkış Yap
              </Button>
            </FormControl.Label>
          </FormControl>
          <>
            {reservations.length === 0 && (
              <Heading mt={5} textAlign="center" fontStyle="italic" mb={2}>
                Randevunuz Bulunmamaktadır
              </Heading>
            )}
          </>
        </VStack>
      </Container>

      <>
        {reservations.length !== 0 && (
          <>
            <Heading mt={5} textAlign="center" fontStyle="italic" mb={2}>
              Randevularım
            </Heading>
            {reservations?.map((reservation) => (
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
                                {`${reservation.barbarName} ${reservation.barberSurName}`}
                              </Badge>
                              <Spacer />
                              <Text fontSize={13} color="coolGray.800">
                                {reservation.hour}
                              </Text>
                            </HStack>
                            <Text
                              color="coolGray.800"
                              mt="3"
                              fontWeight="medium"
                              fontSize="xl"
                            >
                              {reservation.reservationDate}
                            </Text>
                            <Text mt="2" fontSize="sm" color="coolGray.700">
                              {reservation.description}
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
            ))}
          </>
        )}
      </>
    </>
  );
}

export default UserHome;
