import React, {useContext} from "react";
import "./ThemeToggle.css"
import ThemeContext from "../../context/theme-context";

function ThemeToggle() {

    const dataThemeContext = useContext(ThemeContext)

    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id="switch" className="switch">
                <input type="checkbox" checked={dataThemeContext.isThemeLight} onChange={(e) => {
                    dataThemeContext.onChangeTheme(e.target.checked)
                }}/>
                <span className="slider round"/>
            </label>
        </div>
    )
}

export default ThemeToggle