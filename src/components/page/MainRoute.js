import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile';
import Contact from './Kontak';
import Home from './Home';
import Portofolio from './Portofolio';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/portofolio" component={Portofolio}/>
            </Switch>
        );
    }
}

export default Main;
