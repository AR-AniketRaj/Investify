import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image"); //Attribute Check
    expect(heroImage).toBeInTheDocument(); //Presence in the document
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png"); //Attribute Check
  });
});
