import React from 'react';
import {
  View,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

import { calendarData, EventPerformance } from '../calendarData';
import { useEventLikes } from '../modules/eventLikes/hooks/useEventLikes';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Calendar'> {}

export function UserCalendar({ navigation }: Props) {
  const { eventLikes } = useEventLikes();

  const headliner = (performances: EventPerformance[]) => {
    return performances[0].displayName;
  };

  const formatEventDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={calendarData}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.eventItem}
              onPress={() =>
                navigation.navigate('Event', {
                  event: item,
                })
              }
            >
              <Image
                style={styles.image}
                source={require('../img/music-icon-band.jpeg')}
              />
              <View style={styles.eventWrapper}>
                <Text style={styles.eventTitle}>
                  {headliner(item.performance)}
                </Text>
                <Text style={styles.eventDate}>
                  {formatEventDate(item.start.date)}
                </Text>
                <Text style={styles.eventVenue}>{item.venue.displayName}</Text>
              </View>
              <View style={styles.eventLiked}>
                {eventLikes.includes(item.id) ? (
                  <Image source={require('../img/thumbs-up-selected.png')} />
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({ section }) => {
          return <Text style={styles.header}>{section.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
    backgroundColor: '#E4E5E7',
    marginVertical: 4,
    borderRadius: 12,
  },
  eventLiked: {
    alignItems: 'flex-end',
    flexGrow: 1,
  },
  image: {
    height: 54,
    width: 54,
    marginRight: 12,
  },
  eventWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  eventDate: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  eventVenue: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});
