import { FlatList, ScrollView, View, VirtualizedList } from "react-native";
import React from "react";
import Reservation from "../../components/Reservation/Reservation";
import Barber from "../../components/Barber/Barber";
import Contact from "../../components/Contact/Contact";
import Quentions from "../../components/Quentions/Quentions";
import About from "../../components/About/About";

function HomeScreen() {
  return (
    <FlatList
      data={[
        { key: "reservation", component: <Reservation /> },
        { key: "barber", component: <Barber /> },
        { key: "contact", component: <Contact /> },
        { key: "questions", component: <Quentions /> },
        { key: "about", component: <About /> },
      ]}
      renderItem={({ item }) => item.component}
    />
  );
}

export default HomeScreen;
