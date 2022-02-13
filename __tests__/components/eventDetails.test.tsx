import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import EventDetails from '../../src/components/EventDetails';

import { event } from '../fixtures/events';
import { EventLikesProvider } from '../../src/modules/eventLikes/context/eventLikesProvider';

describe('EventDetails', () => {
  test('renders event info correctly', () => {
    const props = {
      navigation: jest.fn(),
      route: { params: { event } },
    };

    // @ts-expect-error incorrect props being passed (for now)
    const { getByText } = render(<EventDetails {...props} />);

    const artistTitle = getByText(
      `${event.performance[0].displayName} at ${event.venue.displayName}`,
    );

    expect(artistTitle).toBeDefined();
  });

  test('like and dislike button', () => {
    const props = {
      navigation: jest.fn(),
      route: { params: { event } },
    };

    const { getByA11yLabel } = render(
      <EventLikesProvider>
        {/* @ts-expect-error incorrect props being passed (for now) */}
        <EventDetails {...props} />
      </EventLikesProvider>,
    );

    const notLikedButton = getByA11yLabel('not-liked');

    expect(notLikedButton).toBeDefined();

    fireEvent.press(notLikedButton);

    const likedButton = getByA11yLabel('liked');

    expect(likedButton).toBeDefined();
  });
});
