import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SigninAndUp from './pages/signinandup/signinandup.component.jsx'
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigninAndUp} />
      </Switch>
    </div>
  );
}

export default App;
