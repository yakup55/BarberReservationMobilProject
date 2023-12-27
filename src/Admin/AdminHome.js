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
} from "native-base";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByBarberId } from "../Redux/actions/barberActions";
import { getBarberId } from "../Redux/actions/reservationActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
function AdminHome() {
  const [barberId, setBarberId] = useState("");
  const dispacth = useDispatch();
  const { barber } = useSelector((state) => state.barber);
  const { reservations } = useSelector((state) => state.reservation);
  const handleLogout = async () => {
    AsyncStorage.removeItem("accessToken");
    AsyncStorage.removeItem("message");
    AsyncStorage.removeItem("phoneNumber");
    AsyncStorage.removeItem("refreshToken");
    AsyncStorage.removeItem("surName");
    AsyncStorage.removeItem("barberId");
    AsyncStorage.removeItem("imageId");
    AsyncStorage.removeItem("expriences");
    AsyncStorage.removeItem("userName");
  };
  useEffect(() => {
    AsyncStorage.getItem("barberId").then((value) => {
      setBarberId(value);
    });
    dispacth(getByBarberId(barberId));
    dispacth(getBarberId(barberId));
  }, []);
  console.log(barberId)
  return (
    <>
      <Container mt={30} margin="auto" display="flex">
        <Avatar
          source={{ uri: `${barber.imageUrl}` }}
          ml={100}
          size={"2xl"}
        ></Avatar>
        <VStack mt={4} width="300" mx="3" maxW="300px">
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Adınız Soyadınız
            </FormControl.Label>
            <Input value={barber.userName} isDisabled />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Telefon Numaranız
            </FormControl.Label>
            <Input value={barber.phoneNumber} isDisabled />
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
            <Heading mt={5} textAlign="center" fontStyle="italic">
              Randevularım
            </Heading>

            <ScrollView
              h="300"
              horizontal={true}
              showsVerticalScrollIndicator={false}
            >
              {reservations?.map((reservation) => (
                <VStack
                  mr="200"
                  py="2"
                  space={3}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box alignItems="center">
                    <Center h="100" w="200" rounded="2xl" shadow={2}>
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
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen(!isOpen)}
                              >
                                İptal
                              </Button>
                              <AlertDialog
                                leastDestructiveRef={cancelRef}
                                isOpen={isOpen}
                                onClose={onClose}
                              >
                                <AlertDialog.Content>
                                  <AlertDialog.CloseButton />
                                  <AlertDialog.Header>
                                    Randevu İptal İşlemi
                                  </AlertDialog.Header>
                                  <AlertDialog.Body>
                                    Randevunuzu iptal etmek istediğinize emin
                                    misiniz randevunuz silinecektir ve kullanıcıya mesaj iletilecektir
                                  </AlertDialog.Body>
                                  <AlertDialog.Footer>
                                    <Button.Group space={2}>
                                      <Button
                                        variant="unstyled"
                                        colorScheme="coolGray"
                                        onPress={onClose}
                                        ref={cancelRef}
                                      >
                                        Vazgeç
                                      </Button>
                                      <Button
                                        colorScheme="danger"
                                        onPress={
                                          onClose &&
                                          (() =>
                                            handleReservationDeleted(
                                              reservation.id
                                            ))
                                        }
                                      >
                                        Sil
                                      </Button>
                                    </Button.Group>
                                  </AlertDialog.Footer>
                                </AlertDialog.Content>
                              </AlertDialog>
                            </Flex>
                          </Box>
                        </Pressable>
                      </Box>
                    </Center>
                  </Box>
                </VStack>
              ))}
            </ScrollView>
          </>
            )}
      </>
    </>
  );
}

export default AdminHome;
