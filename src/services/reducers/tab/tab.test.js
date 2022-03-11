// reducer
import { tabReducer } from "./tab";

// constants
import { TAB_SWITCH } from "../../constants";

const initialTabState = {
  currentTab: "bun",
};

describe("tab reducer", () => {
  it("should return the initial state", () => {
    expect(tabReducer(undefined, {})).toEqual(initialTabState);
  });
  it("should handle TAB_SWITCH", () => {
    expect(
      tabReducer(initialTabState, {
        type: TAB_SWITCH,
        tab: "sauce",
      })
    ).toEqual({
      currentTab: "sauce",
    });
  });
});
