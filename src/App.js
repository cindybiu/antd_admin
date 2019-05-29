import React, { Component } from 'react';
import { createStore } from 'redux' 
import { Provider } from 'react-redux' 
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { main as mainConfig } from './router/index'
import { RenderRoutes } from './router/utils'
import { slidecollapsed } from './reducer/reduxs' 
const store = createStore(slidecollapsed)
class App extends Component {
    render() {
        return (
            <Provider store={store}>  
                    <Router>
                        <div className="App">
                            <RenderRoutes routes={mainConfig}></RenderRoutes>
                        </div>
                    </Router>
            </Provider> 
        );
    }
}

export default App
