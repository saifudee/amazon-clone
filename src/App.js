import React ,{useEffect} from "react";
import './App.css'
import HEADER from './HEADER';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch }
  from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"


function App() {
  const [{},dispatch] = useStateValue();

  const promise = loadStripe("pk_test_51JHTqsSAX0CefeLUpy3QD2DwIdn2JJeaUpE07PpgBrH3xypfozvbtLMivQE1NnTXa859dqmDkx8Q6rmALVLLa7Cm00k1hRMMCH");

    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS >>> ", authUser);      
        if (authUser) {
          // the user just logged in / the user was logged in
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);
    // BEM
    return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/Login">
           <Login/>
          </Route>
          <Route path="/Checkout">
          <HEADER />
            <Checkout />
          </Route>
          <Route path="/payment">
          <HEADER />
          <Elements stripe={promise}>
           <Payment/>
           </Elements>
          </Route>
          <Route path="/">
          <HEADER />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
