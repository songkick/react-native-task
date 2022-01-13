import React from "react";
import renderer from "react-test-renderer";

import EventDetails from "../../src/components/EventDetails";

import { event } from "../fixtures/events";

describe("EventDetails", () => {
  test("renders event info correctly", () => {
    const props = { route: { params: { event: event } } };
    const tree = renderer.create(<EventDetails {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
