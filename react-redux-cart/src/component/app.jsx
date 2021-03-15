import React from 'react'
import Product from './product'
import {Provider} from 'react-redux'
import store from '../store/index'
import CartPayment from './cartPayment'
import Nav from './nav'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
let App=()=>{
    return(
        <BrowserRouter>
        <Switch>
       
        <Provider store={store} >
        <div>
           <Nav></Nav>
            <h2 style={{textAlign:'center'}}>React-Redux-Cart</h2>
            <Route path='/' exact>
            <Product/>
            </Route>
            <Route path='/cart'>
            <CartPayment/>
            </Route>
            
        </div>
        </Provider>
        </Switch>
        </BrowserRouter>
        
    )
}
export default App;