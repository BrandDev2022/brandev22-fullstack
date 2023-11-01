import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";

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
  test("Test English Navigation", () => {
    // const HomeTab = screen.getByText(/home/);
    // expect(HomeTab).toBeInTheDocument();
  });

  test("Test Manderin Navigation", () => {});
});
