import React, { Component } from "react";
import "./App.css";
import {  Link,Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage.js";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
} from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {


  render() {
    
    return (
      <div className="App">
       <Header/>

        <Container text>
          
          <div style={{marginRight:'120px'}}>
            <Route path="/movies" component={MoviesPage}></Route>
            <hr></hr>
            
          </div>
        </Container>
        <Footer></Footer>
        
      </div>
    );
  }
}

export default App;
