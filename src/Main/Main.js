import * as React from 'react';

import './Main.css';
import logo from '../logo.svg';
import Text from '../Text/Text';
import Button from '../Button/Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            user: ''
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState((state) => ({
            theme: state.theme === 'dark' ? 'light' : 'dark'
        }));
    }

    render() {
        this.className = 'Main';
        this.className = `${this.className} ${this.state.theme}`;
        return (
            <div className={this.className}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    User name:
                    <input
                        type="text"
                        onChange={(event) =>
                            this.setState({ user: event.target.value })
                        }
                    ></input>
                    <Text
                        theme={this.state.theme}
                        user={this.state.user}
                    ></Text>
                    <Button toggleTheme={this.toggleTheme}></Button>
                </header>
            </div>
        );
    }
}

export default Main;
