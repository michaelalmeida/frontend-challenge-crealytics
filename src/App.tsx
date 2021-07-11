import GlobalContainer from "./App.styled";
import GlobalStyles from "./components/style/global";
import { IntlProvider } from "react-intl";

import Routes from "./routes";
import messages from "./lang";

function App(): JSX.Element {
  return (
    <IntlProvider locale="en" messages={messages.en}>
      <GlobalContainer>
        <GlobalStyles />
        <Routes />
      </GlobalContainer>
    </IntlProvider>
  );
}

export default App;
