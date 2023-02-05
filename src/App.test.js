import React from "react";
import {unmountComponentAtNode } from "react-dom";
import { render, screen} from '@testing-library/react';
import App from "./App"



let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders without issue", () => {
render(<App></App>);
const textElement = screen.getByText(/amount/i);
  expect(textElement).toBeInTheDocument();
})