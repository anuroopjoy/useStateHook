import './Nav.css';
import logo from '../logo.svg';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { useState } from 'react';

function Nav() {
    let className = 'Nav';
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState('');
    
    const toggleTheme = () => {
        setTheme((state) => (state === 'dark' ? 'light' : 'dark'));
    }

    className = `${className} ${theme}`;

    return (
        <div className={className}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                User name:
                <input
                    type="text"
                    onChange={(evt) => setUser(evt.target.value)}
                ></input>
                <Text user={user} theme={theme}></Text>
                <Button toggleTheme={toggleTheme}></Button>
            </header>
        </div>
    );
}

export default Nav;
