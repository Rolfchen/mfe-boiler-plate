import React from "react";
import { expect } from "chai";
import { render, screen } from "@testing-library/react";
import { getRenderableComponent } from "../getRenderableComponent";

describe("Helpers/getRenderableComponent", () => {
  it("can return available component", () => {
    const stubComponentName = "StatisticsOverview";
    const MockRenderableComponent = getRenderableComponent(stubComponentName);
    const { container } = render(<MockRenderableComponent />);
    const mockComponent = container.firstChild;
    expect(mockComponent).to.not.be.null;
  });

  it("can't return unavailable component", () => {
    const stubComponentName = "jiberrish";
    const MockRenderableComponent = getRenderableComponent(stubComponentName);
    const { container } = render(<MockRenderableComponent />);
    const mockComponent = container.firstChild;
    expect(mockComponent).to.be.null;
  });
});
