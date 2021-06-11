import { shallow } from "enzyme";

import Congrates from "./Congrates";
import { findByTestAtr } from "./testUtisl";

const setup = (props = {}) => {
  return shallow(<Congrates {...props} />);
};

test("Error free rendering", () => {
  const wrapper = setup();
  const component = findByTestAtr(wrapper, "component-congrates");
  expect(component.length).toBe(1);
});

test("render no text when success is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAtr(wrapper, "component-congrates");
  expect(component.text()).toBe("");
});

test("render text when success is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAtr(wrapper, "congrates-message");
  expect(message.text().length).not.toBe(0);
});
