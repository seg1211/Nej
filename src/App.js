import Pages from "./pages/Pages";
import GlobalStyle from './styled.components'
import React from "react";
import Category from "./components/Category";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import {Navv, Logo} from './styled.components'
import Footer from "./components/Footer";
import {BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Navv>
          <GiKnifeFork/>
          <Logo to={'/'}>deliciousss</Logo>
        </Navv>
      <Category/>
      <Search/>
      <Pages/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
