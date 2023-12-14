import {
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { getList } from "../../Redux/actions/aboutActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function About() {
  const dispacth = useDispatch();
  const { abouts } = useSelector((state) => state.about);
  useEffect(() => {
    dispacth(getList());
  }, []);
  console.log(abouts);
  return (
    <VStack mt={10} mb={10} space={3} justifyContent="center">
      <Center mb={20} h="40" w="450" rounded="md" shadow={2}>
        <View style={styles.container}>
          {/*Render our MapView*/}
          <MapView
            style={styles.map}
            //specify our coordinates.
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </Center>
      {abouts?.map((about)=>(
 <Center mb={10} h="20" w="400" rounded="md" shadow={2}>
 <Heading mb={4} size="xl">
   İletişim Bilgilerimiz
 </Heading>
 <Heading textAlign="center" size="md">
   {about.name}
 </Heading>
 <Text textAlign="center" py="3">
   <Entypo name="location" size={24} color="black" />
   {about.location}
 </Text>
 <Text textAlign="center" py="3">
   <Feather name="phone" size={24} color="black" />
   {about.phoneNumber}
 </Text>
 <Text textAlign="center" py="3">
   <MaterialIcons name="email" size={24} color="black" />{" "}
   {about.eposta}
 </Text>
</Center>
      ))}
     
    </VStack>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default About;
