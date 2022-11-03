import { createContext, useContext, useState } from "react"

 const ThemeContext = createContext();
const ContextProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('light');

    const setTheme = (value) => {
        setCurrentTheme(value);
    }
   return(
      <ThemeContext.Provider value={{currentTheme, setTheme}} >
        {children}
      </ThemeContext.Provider>
   )
}

export default ContextProvider;

export const ThemeStateContext = () => useContext(ThemeContext);