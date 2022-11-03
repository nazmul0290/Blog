import { BsFillMoonFill } from "react-icons/bs";
import "./Header.css";
import { ThemeStateContext } from "../../contexts/contextProvider";

const Header = () => {
    const context = ThemeStateContext();
    const changedVal = context.currentTheme === 'light' ? 'dark' : "light";
  return (
    <div>
      <h2 className="heading">This is the header</h2>
      <button onClick={() => {context.setTheme(changedVal)}}>
        <BsFillMoonFill />
      </button>
    </div>
  );
};
export default Header;
