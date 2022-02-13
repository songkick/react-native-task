import React, { ReactNode, useState } from 'react';
import { Event } from '../../../calendarData';
import {
  initialState,
  EventLikesContext,
  EventLikesState,
} from './eventLikesContext';

interface EventLikesProviderProps {
  children: ReactNode;
}

export const EventLikesProvider = ({ children }: EventLikesProviderProps) => {
  const [eventLikes, setEventLikes] = useState<EventLikesState>(initialState);

  function toggleEventLike(eventId: Event['id']) {
    const eventIndex = eventLikes.indexOf(eventId);

    setEventLikes(
      eventIndex === -1
        ? [...eventLikes, eventId]
        : eventLikes.filter(id => id !== eventId),
    );
  }

  return (
    <EventLikesContext.Provider value={{ eventLikes, toggleEventLike }}>
      {children}
    </EventLikesContext.Provider>
  );
};
