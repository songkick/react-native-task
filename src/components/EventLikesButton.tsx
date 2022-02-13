import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Event } from '../calendarData';
import { useEventLikes } from '../modules/eventLikes/hooks/useEventLikes';

interface Props {
  eventId: Event['id'];
}

export function EventLikesButton({ eventId }: Props) {
  const { eventLikes, toggleEventLike } = useEventLikes();

  return (
    <TouchableOpacity onPress={() => toggleEventLike(eventId)}>
      {eventLikes.includes(eventId) ? (
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
  );
}
