import PropTypes from "prop-types";
import { MainContent } from "./Layout.styled";

import Header from "./Header";

type LayoutProps = {
  component: JSX.Element;
};

const Layout = ({ component }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <MainContent data-testid="layout">{component}</MainContent>
  </>
);

Layout.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Layout;
