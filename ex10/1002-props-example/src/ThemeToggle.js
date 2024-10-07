import React from 'react'

function ThemeToggle({ toggleTheme, theme }) {
    return (
        <button onClick={toggleTheme}>{theme}</button>
    )
}

export default ThemeToggle