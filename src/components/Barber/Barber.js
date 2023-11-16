import {
  AspectRatio,
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
  }, [dispacth, barbers]);
  console.log(barbers);
  return (
    <>
    <Heading mt={5} textAlign="center" fontStyle="italic" mb={2}>
        Berberlerimiz
      </Heading>
      <ScrollView h="300" horizontal={true}>
<Box mb={10} mt={10} alignItems="center">
      
      <HStack space={3} justifyContent="center">

        <Center mt={5} h="100" w="200" rounded="2xl" shadow={2}>
          <Avatar
            mt={10}
            size="2xl"
            source={{
              uri: "https://i.hizliresim.com/rpqnsuo.png",
            }}
          ></Avatar>
           <Heading size={"md"} textAlign="center" fontStyle="italic" mb={2}>
            Yakup Yıldırım
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
             05445040805
            </Badge>
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
            2 Yıl Deneyimli
            </Badge>
          </Heading>
        </Center>
        <Center mt={5} h="100" w="200" rounded="2xl" shadow={2}>
          <Avatar
            mt={10}
            size="2xl"
            source={{
              uri: `https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
            }}
          ></Avatar>
           <Heading size={"md"} textAlign="center" fontStyle="italic" mb={2}>
            Yakup Yıldırım
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
             05445040805
            </Badge>
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
            2 Yıl Deneyimli
            </Badge>
          </Heading>
        </Center>
        <Center mt={5} h="100" w="200" rounded="2xl" shadow={2}>
          <Avatar
            mt={10}
            size="2xl"
            source={{
              uri: `https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
            }}
          ></Avatar>
           <Heading size={"md"} textAlign="center" fontStyle="italic" mb={2}>
            Yakup Yıldırım
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
             05445040805
            </Badge>
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
            2 Yıl Deneyimli
            </Badge>
          </Heading>
        </Center>
        <Center mt={5} h="100" w="200" rounded="2xl" shadow={2}>
          <Avatar
            mt={10}
            size="2xl"
            source={{
              uri: `https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
            }}
          ></Avatar>
           <Heading size={"md"} textAlign="center" fontStyle="italic" mb={2}>
            Yakup Yıldırım
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
             05445040805
            </Badge>
          </Heading>
          <Heading textAlign="center" fontStyle="italic" mb={2}>
            {" "}
            <Badge colorScheme="success" alignSelf="center">
            2 Yıl Deneyimli
            </Badge>
          </Heading>
        </Center>
     
      </HStack>
    </Box>
    </ScrollView>
    </>
    
    
  );
}

export default Barber;
