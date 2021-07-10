import { cleanup, queryByTestId } from "@testing-library/react";

import { renderWithStore } from "../../utils/testUtils";

import Layout from ".";

afterEach(cleanup);

describe("<Layout />", () => {
  test("renders the Layout component", () => {
    const { container } = renderWithStore(<Layout component={<></>} />);

    expect(queryByTestId(container, "layout")).toBeTruthy();
  });

  test("renders the children component", () => {
    const { container } = renderWithStore(
      <Layout
        component={
          <>
            <div data-testid="test-children-layout">Test</div>
          </>
        }
      />
    );

    expect(queryByTestId(container, "test-children-layout")).toBeTruthy();
  });
});
