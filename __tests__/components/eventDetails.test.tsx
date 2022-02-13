import React from 'react';
import { render } from '@testing-library/react-native';

import EventDetails from '../../src/components/EventDetails';

import { event } from '../fixtures/events';

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

    // @ts-expect-error incorrect props being passed (for now)
    const { getByA11yLabel } = render(<EventDetails {...props} />);

    const likeButton = getByA11yLabel('likeEvent');

    expect(likeButton).toBeDefined();
  });
});
