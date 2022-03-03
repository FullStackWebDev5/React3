import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
// import Products from './components/Products/Products'
import Products2 from "./components/Products2/Products2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  showProducts = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <h1 className="display-1">Welcome to our site</h1>
        <p className="lead">Feel free to explore ...</p>
        {/* <Products /> */}
        <Button
          variant="success"
          className="show-button"
          onClick={this.showProducts}
        >
          {`${this.state.show ? 'Hide' : 'Show'} Products`}
        </Button>
        {this.state.show && <Products2 />}
      </div>
    );
  }
}

export default App;
