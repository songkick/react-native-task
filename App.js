import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserCalendar from "./src/components/UserCalendar";
import EventDetails from "./src/components/EventDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calendar" component={UserCalendar} />
        <Stack.Screen name="Event" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
