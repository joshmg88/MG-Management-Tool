import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import './App.css';
import store from './ducks/store'
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
