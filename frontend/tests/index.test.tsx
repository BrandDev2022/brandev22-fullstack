import data from "../pages/data";

describe("Sanity Tests", () => {
  test("3 + 3 Should equal 6", () => {
    expect(3 + 3).toEqual(6);
  });

  test("9 squared should equal 81", () => {
    expect(9 ** 2).toEqual(81);
  });

  test("true should not equal false", () => {
    expect(true).not.toBe(false);
  });
});

describe("Test Navigation Options", () => {
  const navEnglish = data["english"]["navigationOptions"];

  //   expect(navEnglish.length).toBe(2);

  //   expect(navEnglish[0]).toBe({ path: "/", text: "Home" });
});
