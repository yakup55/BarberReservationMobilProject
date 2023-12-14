import { FlatList, ScrollView, View, VirtualizedList } from "react-native";
import React from "react";
import Reservation from "../../components/Reservation/Reservation";
import Barber from "../../components/Barber/Barber";
import Quentions from "../../components/Quentions/Quentions";

function HomeScreen() {
  return (
    <FlatList
      data={[
        { key: "reservation", component: <Reservation /> },
        { key: "barber", component: <Barber /> },
        { key: "questions", component: <Quentions /> },
      ]}
      renderItem={({ item }) => item.component}
    />
  );
}

export default HomeScreen;
