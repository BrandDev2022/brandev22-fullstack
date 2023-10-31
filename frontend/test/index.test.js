const sum = require("../components/sum");

describe("Sanity tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("multiplies 3 times 3 to equal 9", () => {
    expect(3 * 3).toBe(9);
  });
});

describe("Language Related Tests", () => {});
