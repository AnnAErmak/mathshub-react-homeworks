/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';
import ThemeContext from "./context/theme-context";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [theme, setTheme] = useState(false)

    useEffect(() => {
        const storageUserStatus = localStorage.getItem('isLoggedIn');

        if (storageUserStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // Тут мы должны проверять логин и пароль
        // Но это всего лишь демо
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const onChangeThemeHandler = () => {
        setTheme(!theme)
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                onLogout: logoutHandler,
            }}
        >
            <ThemeContext.Provider
                value={{
                    isThemeLight: theme,
                    onChangeTheme: onChangeThemeHandler,
                }}
            >
                <MainHeader/>
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler}/>}
                    {isLoggedIn && <Home onLogout={logoutHandler}/>}
                </main>
            </ThemeContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
