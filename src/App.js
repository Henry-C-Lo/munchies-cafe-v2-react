import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './containers/Home/Home';
import Menu from './containers/Menu/Menu';
import Reservation from './containers/Reservation/Reservation';
import './containers/Home/Home.css';
import {library} from '@fortawesome/fontawesome-svg-core';

import {faFacebookF, faInstagram, faYelp} from "@fortawesome/free-brands-svg-icons";
import {faCarrot, faPepperHot, faGlassCheers} from '@fortawesome/free-solid-svg-icons';
library.add(faFacebookF, faInstagram, faYelp, faCarrot, faPepperHot, faGlassCheers);

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path='/Menu' exect component={ Menu }/>
                <Route path='/Reservation' component={ Reservation }/>
                <Redirect to="/"/>
            </Switch>
        );

        return (
            <div className='App'>
                <div className='container-fluid p-0'>
                    <NavBar />
                    <main>
                        {routes}
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

