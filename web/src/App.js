import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page/main-page'
import { Grid, Row, Col, Well } from 'react-bootstrap';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">KOTHulator</h1>
        </header>

        <Grid 
          componentClass="div"
        >
          <Row>
            <MainPage />
          </Row>
        </Grid>

      </div>
    );
  };
};

export default App;
