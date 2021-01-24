import * as React from 'react';

import './App.css';
import Nav from './Nav/Nav';
import Main from './Main/Main';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <Main></Main>
            </div>
        );
    }
}

export default App;
