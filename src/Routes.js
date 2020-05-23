import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/product/:id'>
        <Product/>
      </Route>
    </Switch>
  )
}

export default Routes;