import React from "react";
import renderer from "react-test-renderer";

import { UserCalendar } from "../../src/components/UserCalendar";
import { LikedContext } from "../../src/contexts/likedContext";
import { events } from "../fixtures/events";

describe("UserCalendar", () => {
  const wrapper = (props) => {
    const contextValue = {
      ids: [],
    };

    return (
      <LikedContext.Provider value={contextValue}>
        <UserCalendar {...props} />
      </LikedContext.Provider>
    );
  };

  test("renders calendar correctly", () => {
    const mockHandler = () => {
      console.log("onEvent called");
    };
    const props = { likes: [], calendarData: events, onEvent: mockHandler };
    const json = renderer.create(wrapper(props)).toJSON();
    expect(json).toMatchSnapshot();
  });
});
