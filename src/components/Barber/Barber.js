import {
  Avatar,
  Badge,
  Box,
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList2 } from "../../Redux/actions/barberActions";

function Barber() {
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  useEffect(() => {
    dispacth(getList2());
  }, []);

  return (
    <>
      <Heading mt={5} textAlign="center" fontStyle="italic" mb={2}>
        Berberlerimiz
      </Heading>
      <ScrollView h="300" horizontal={true}>
        <Box mb={10} mt={10} alignItems="center">
          <HStack space={3} justifyContent="center">
            {barbers.map((barber) => (
              <Center mt={5} h="100" w="200" rounded="2xl" shadow={2}>
                <Avatar
                  mt={10}
                  size="2xl"
                  source={{
                    uri: `${barber.imageUrl}`,
                  }}
                ></Avatar>
                <Heading
                  size={"md"}
                  textAlign="center"
                  fontStyle="italic"
                  mb={2}
                >
                  {barber.userName} {barber.surName}
                </Heading>
                <Heading textAlign="center" fontStyle="italic" mb={2}>
                  {" "}
                  <Badge colorScheme="success" alignSelf="center">
                    {barber.phoneNumber}
                  </Badge>
                </Heading>
                <Heading textAlign="center" fontStyle="italic" mb={2}>
                  {" "}
                  <Badge colorScheme="success" alignSelf="center">
                    {`${barber.experience} Yıl Deneyimli`}
                  </Badge>
                </Heading>
              </Center>
            ))}
          </HStack>
        </Box>
      </ScrollView>
    </>
  );
}

export default Barber;
