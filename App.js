import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LikedProvider } from "./src/contexts/likedContext";

import UserCalendar from "./src/components/UserCalendar";
import EventDetails from "./src/components/EventDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LikedProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calendar" component={UserCalendar} />
          <Stack.Screen name="Event" component={EventDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </LikedProvider>
  );
}
