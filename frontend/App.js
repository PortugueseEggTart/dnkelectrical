import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
}

export default App;