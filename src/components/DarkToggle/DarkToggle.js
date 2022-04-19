import React, { useContext } from 'react'
import { Toggle, ThemeImage } from './DarkToggleStyles'
import { UserThemeContext } from '../UserThemeContext'


export function DarkToggle() {
    const { colorMode, setColorMode } = useContext(UserThemeContext);


    const handleToggle = (e) => {
        e.preventDefault();
        const newColorMode = colorMode === 'light' ? 'dark' : 'light';
        setColorMode(newColorMode);
    }

    if (!colorMode) {
        return null;
    }

    return (
        <Toggle light={colorMode === 'light' ? true : false}  onClick={handleToggle}>
            <ThemeImage src={ colorMode === 'light' ? '/images/sun.png' : '/images/moon.png' }/>
        </Toggle>
    )
}

