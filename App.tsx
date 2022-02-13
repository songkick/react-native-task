import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserCalendar } from './src/components/UserCalendar';
import EventDetails from './src/components/EventDetails';

import { Event } from './src/calendarData';
import { EventLikesProvider } from './src/modules/eventLikes/context/eventLikesProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export type RootStackParamList = {
  Calendar: undefined;
  Event: { event: Event };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EventLikesProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Calendar" component={UserCalendar} />
            <Stack.Screen name="Event" component={EventDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </EventLikesProvider>
    </QueryClientProvider>
  );
}
