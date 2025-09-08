// import React, {createContext, useState} from 'react';

// const DarkModeContext = createContext();

// function DarkModeProvider(props){
//     const [darkMode, setDarkMode] = useState(false);
//     const toggleDarkMode = (dark) => {
//         setDarkMode(!darkMode);
//     };
//     return (
//         <div>  
//             <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
//                 {props.children}
//             </DarkModeContext.Provider>
//         </div>
//     )
// };

export {DarkModeContext, DarkModeProvider};
import React, { createContext, useState, useContext } from 'react';

// Dark Mode Context
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
