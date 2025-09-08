import React, { useContext } from 'react';
import {DarkModeContext} from "./context/DarkModeContext";


export default Lightswitch

function Lightswitch() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
            aria-label="Toggle dark mode"
        >
            <img
                src={darkMode ? "/portfolio/images/lightswitch-off.png" : "/portfolio/images/lightswitch-on.png"}
                alt="Toggle dark mode"
                className="w-8 h-8"
            />
        </button>
    );
}


