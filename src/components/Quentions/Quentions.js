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
import { useEffect } from "react";

import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getList8 } from "../../Redux/actions/quentionsActions";
function Quentions() {
  const dispacth = useDispatch();
  const { quentions } = useSelector((state) => state.quention);
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });
  useEffect(() => {
    dispacth(getList8());
  }, []);
  return (
    <>
      <Heading mt={5} textAlign="center" fontStyle="italic">
        Sıkça Sorulan Sorular?
      </Heading>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        {quentions?.map((quention) => (
          <VStack
            ml="2"
            mr="2"
            py="8"
            space={8}
            alignItems="center"
            justifyContent="center"
          >
            <View
              style={{
                flexDirection: flexDir,
              }}
            >
              <VStack
                w="400"
                h="150"
                borderRadius="xl"
                p="3"
                bg="cyan.200"
                space={2}
                alignItems="center"
                justifyContent="center"
              >
                <Heading size="md"> {quention.name}</Heading>
                <Text
                  textAlign="center"
                  _dark={{
                    color: "coolGray.800",
                  }}
                >
                  {quention.description}
                </Text>
              </VStack>
            </View>
          </VStack>
        ))}
      </ScrollView>
    </>
  );
}

export default Quentions;
