import React from 'react';
import './App.css';
import Header from './components/header';
import Organic1 from './pages/organic1';
import Footer from './components/footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Organic2 from './pages/organic2';
import Organic3 from './pages/organic3';
import Organic4 from './pages/organic4';
import chocowafer from './pages/chocowafer';
import mangojuice from './pages/mangojuice';

import paperboat from './pages/paperboat';

import rawpressery from './pages/rawpressery';
import tropicana from './pages/tropicana';
import berrycone from './pages/berrycone';

import macaroon from './pages/macaroon';

import rolledcookie from './pages/rolledcookie';

import whiteburger from './pages/whiteburger';
import chargrilledburger from './pages/chargrilledburger';
import schweepes from './pages/schweepes';
import monster from './pages/monster';
import milk from './pages/milk';
import mango from './pages/mango';
import tomato from './pages/tomato';
import pineapple from './pages/pineapple';
import bnatural from './pages/bnatural';
import strawberry from './pages/strawberry';
import fig from './pages/fig';
import mangodrink from './pages/mangodrink';


function App() {
  return (
     <div className="App">
       <Router>
    <Header/>
    <Switch>
    <Route exact path='/' component={Organic1}/>
    <Route path='/organic_2' component = {Organic2}/> 
    <Route path='/organic_3' component = {Organic3}/>
    <Route path='/organic_4' component = {Organic4}/>
    <Route path='/chocowafer' component ={chocowafer}/>
    <Route path='/mangojuice' component ={mangojuice}/>
    
    <Route path='/tropicana' component ={tropicana}/>
    <Route path='/paperboat' component ={paperboat}/>
    
    <Route path='/rawpressery' component ={rawpressery}/>
    <Route path='/berrycone' component ={berrycone}/>
    <Route path='/macaroon' component ={macaroon}/>
    <Route path='/rolledcookie' component ={rolledcookie}/> 
    <Route path='/whiteburger' component ={whiteburger}/>
    <Route path='/chargrilledburger' component ={chargrilledburger}/>
    <Route path='/schweepes' component ={schweepes}/>
    <Route path='/monster' component ={monster}/>
    <Route path='/pineapple' component ={pineapple}/>
    <Route path='/strawberry' component ={strawberry}/>
    <Route path='/fig' component ={fig}/>
    <Route path='/mangodrinnk' component ={mangodrink}/>
    <Route path='/bnatural' component ={bnatural}/>
    <Route path='/tomato' component ={tomato}/>
    <Route path='/mango' component ={mango}/>
    <Route path='/milk' component ={milk}/>
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
