import PropTypes from "prop-types";
import { Container, MainContent } from "./Layout.styled";

import Header from "./Header";

type LayoutProps = {
  component: JSX.Element;
};

const Layout = ({ component }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <Container data-testid="layout">
      <MainContent>{component}</MainContent>
    </Container>
  </>
);

Layout.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Layout;
