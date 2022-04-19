import React from "react";
import { 
    COLORS,
    COLOR_MODE_KEY,
    INITIAL_COLOR_MODE_CSS_PROP,
    BREAKPOINTS,
    FONTS, 
} from "../themes/cssVariables";

export const UserThemeContext = React.createContext()

export const UserThemeProvider = ({ children }) => {
    const [colorMode, rawSetColorMode] = React.useState(undefined);

    React.useEffect(() => {
        const root = window.document.documentElement;

        const initialColorValue = root.style.getPropertyValue(
            INITIAL_COLOR_MODE_CSS_PROP
        );

        console.log(initialColorValue);

        rawSetColorMode(initialColorValue);
    }, []);

    const contextValue = React.useMemo(() => {
        function setColorMode(newValue) {
            const root = window.document.documentElement;
            console.log({newValue})
            localStorage.setItem(COLOR_MODE_KEY, newValue);

            Object.entries(COLORS).forEach(([name, colorByTheme]) => {
                const cssVarName = `--${name}`;
                root.style.setProperty(cssVarName, colorByTheme[colorMode]);
            });

            Object.entries(BREAKPOINTS).forEach(([name, breakpoint]) => {
                const cssVarName = `--${name}`;
                root.style.setProperty(cssVarName, breakpoint[colorMode]);
            });
            
            Object.entries(FONTS).forEach(([name, font]) => {
                const cssVarName = `--${name}`;
                root.style.setProperty(cssVarName, font[colorMode]);
            });

            rawSetColorMode(newValue);
        }

        return {
            colorMode,
            setColorMode,
        };
    }, [colorMode, rawSetColorMode]);

    return (
        <UserThemeContext.Provider value={contextValue}>
            {children}
        </UserThemeContext.Provider>
    );
};