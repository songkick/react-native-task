import { useContext } from 'react';
import {
  EventLikesContext,
  EventLikesValues,
} from '../context/eventLikesContext';

interface UseEventLikesHook extends EventLikesValues {}

export const useEventLikes = (): UseEventLikesHook => {
  const context = useContext(EventLikesContext);

  if (!context) {
    throw new Error('useEventLikes must be used within an EventLikesProvider');
  }

  const { eventLikes, toggleEventLike } = context;

  return {
    eventLikes,
    toggleEventLike,
  };
};
