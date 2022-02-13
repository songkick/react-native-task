import { createContext } from 'react';
import { Event } from '../../../calendarData';

export type EventLikesState = number[];

export const initialState: EventLikesState = [];

export type EventLikesValues = {
  eventLikes: EventLikesState;
  toggleEventLike: (eventId: Event['id']) => void;
};

export const EventLikesContext = createContext<EventLikesValues>({
  eventLikes: initialState,
  toggleEventLike: () => {},
});
