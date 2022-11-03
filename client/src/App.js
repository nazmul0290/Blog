import HomePage from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import {ThemeStateContext} from "./contexts/contextProvider";

function App() {
  const {currentTheme} = ThemeStateContext();
  console.log(currentTheme)
  return (
    <div className="app" data-theme={currentTheme}>
      <HomePage/>
    </div>
  );
}

export default App;
