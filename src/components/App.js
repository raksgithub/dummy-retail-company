import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { 
  ITEMS, 
  PRODUCTS,
  APPAREL
 } from '../actions/types'; 

// Browser History
import history from '../history';

// components
import Home from './Home';
import Contacts from './Contacts';
import About from './About';
import News from './News';
import Cart from './Cart';
import Testimonials from './Testimonials';

// Other Components
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar/NavBar';
import Items from './containers/Items/Items';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavBar />
            <div className="ui container">
              <Switch>
                <Route path="/Home" exact component={Home}></Route>
                <Route path="/Contacts" exact component={Contacts}></Route>
                <Route path="/About" exact component={About}></Route>
                <Route path="/News" exact component={News}></Route>
                <Route path="/Cart" exact component={Cart}></Route>
              </Switch>
            </div>
          </div>
        </Router>
        <div className="ui container">
          <Header />
          <hr />
          {/* items */}
          <Items itemName={ITEMS} noOfItems="8" />
          <hr />
          {/* Products */}
          <Items itemName={PRODUCTS} noOfItems="12" />
          {/* Collections */}
          {/* Services */}
          {/* Offers */}
          {/* Women */}
          {/* Men */}
          {/* Apparel */}
          <hr />
          <Items itemName={APPAREL} noOfItems="21" />
          <hr />
          {/* Testimonials */}
          <Testimonials />
          <hr />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
