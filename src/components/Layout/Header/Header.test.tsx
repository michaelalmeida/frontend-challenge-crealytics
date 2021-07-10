import { cleanup, screen } from "@testing-library/react";

import { renderWithStore } from "../../../utils/testUtils";

import Header from ".";

afterEach(cleanup);

describe("<Header />", () => {
  test("renders the Login component", () => {
    renderWithStore(<Header />);
    const logo = screen.getByRole("link", {
      name: /logo/i,
    });

    expect(logo).toBeTruthy();
  });
});
