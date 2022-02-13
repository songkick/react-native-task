import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Event } from '../calendarData';
import { useEventLikes } from '../modules/eventLikes/hooks/useEventLikes';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Event'> {}

function EventDetails({ route }: Props) {
  const event = route.params.event;
  const { eventLikes, toggleEventLike } = useEventLikes();

  const eventTitle = (eventData: Event) => {
    return `${eventData.performance[0].displayName} at ${eventData.venue.displayName}`;
  };

  const formatEventDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.screen}>
      <Image
        style={styles.heroImage}
        source={require('../img/gig-image.jpeg')}
      />
      <Text style={styles.title}>{eventTitle(event)}</Text>
      <Text style={styles.date}>{formatEventDate(event.start.date)}</Text>
      <View style={styles.lineUpContainer}>
        <Text style={styles.lineUpTitle}>Line Up</Text>
        {event.performance.map(artist => {
          return (
            <Text key={artist.id} style={styles.artistName}>
              {artist.displayName}
            </Text>
          );
        })}
      </View>
      <TouchableOpacity onPress={() => toggleEventLike(event.id)}>
        {eventLikes.includes(event.id) ? (
          <Image
            accessibilityLabel="liked"
            source={require('../img/thumbs-up-selected.png')}
          />
        ) : (
          <Image
            accessibilityLabel="not-liked"
            source={require('../img/thumbs-up-unselected.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
  },
  heroImage: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginVertical: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginBottom: 12,
  },
  lineUpContainer: {
    flexDirection: 'column',
  },
  lineUpTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginBottom: 6,
  },
  artistName: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});

export default EventDetails;
