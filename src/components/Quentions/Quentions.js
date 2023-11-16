import { Feather, Foundation } from "@expo/vector-icons";
import {
  Avatar,
  Box,
  Center,
  FlatList,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  ScrollView,
  Spacer,
  Stack,
  TextArea,
  VStack,
  View,
  useBreakpointValue,
} from "native-base";
import React from "react";

import { Text } from "react-native";
import Accordion from "react-native-accordion-wrapper";
import { useDispatch, useSelector } from "react-redux";
function Quentions() {
  const dispacth = useDispatch();
  const { quentions } = useSelector((state) => state.quention);
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row"
  });
  return (
    <>
    <Heading mt={5} textAlign="center" fontStyle="italic">Sıkça Sorulan Sorular?</Heading>
    <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
      <VStack ml="2" mr="2" py="8" space={8} alignItems="center" justifyContent="center">
        
        <View
          style={{
            flexDirection: flexDir,
          }}
        >
          <VStack
            w="300"
            h="150"
            borderRadius="xl"
            p="3"
            bg="cyan.200"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
         <Heading size="md">   Hangi Şehirdesiniz</Heading>
            <Text
              textAlign="center"
              _dark={{
                color: "coolGray.800",
              }}
            >
             Sadece Tokat
            </Text>
          </VStack>
        </View>
      </VStack>
      <VStack ml="2" mr="2" py="8" space={8} alignItems="center" justifyContent="center">
        
        <View
          style={{
            flexDirection: flexDir,
          }}
        >
          <VStack
            w="300"
            h="150"
            borderRadius="xl"
            p="3"
            bg="cyan.200"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
         <Heading size="md">   Hangi Şehirdesiniz</Heading>
            <Text
              textAlign="center"
              _dark={{
                color: "coolGray.800",
              }}
            >
             Sadece Tokat
            </Text>
          </VStack>
        </View>
      </VStack>
      <VStack ml="2" mr="2" py="8" space={8} alignItems="center" justifyContent="center">
        
        <View
          style={{
            flexDirection: flexDir,
          }}
        >
          <VStack
            w="300"
            h="150"
            borderRadius="xl"
            p="3"
            bg="cyan.200"
            space={2}
            alignItems="center"
            justifyContent="center"
          >
         <Heading size="md">   Hangi Şehirdesiniz</Heading>
            <Text
              textAlign="center"
              _dark={{
                color: "coolGray.800",
              }}
            >
             Sadece Tokat
            </Text>
          </VStack>
        </View>
      </VStack>
    </ScrollView>
    </>
  
  );
}

export default Quentions;
