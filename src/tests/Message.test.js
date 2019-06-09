import React from "react";
import { create } from "react-test-renderer";
import Message from "../components/Message";

describe("Message", () => {
  test("matches the snapshot", () => {
    const component = create(<Message />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
