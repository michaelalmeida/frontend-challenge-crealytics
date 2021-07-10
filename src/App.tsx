import GlobalContainer from "./App.styled";
import GlobalStyles from "./components/style/global";

import Routes from "./routes";

function App(): JSX.Element {
  return (
    <GlobalContainer>
      <GlobalStyles />
      <Routes />
    </GlobalContainer>
  );
}

export default App;
