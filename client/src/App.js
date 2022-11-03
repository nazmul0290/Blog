import HomePage from "./pages/Home";

import {ThemeStateContext} from "./contexts/contextProvider";

function App() {
  const {currentTheme} = ThemeStateContext();
  console.log(currentTheme)
  return (
    <div data-theme={currentTheme}>
      <HomePage/>
    </div>
  );
}

export default App;
