import React, {Component} from 'react';

import Hero from "../../components/Hero";
import Intro from '../../components/Intro';
import Gallery from '../../components/Gallery';
import About from '../../components/About';
import Testimonials from '../../components/Testimonials';


class Home extends Component {
    render() {
        return (
            <div className='home' id='home'>
                <Hero />
                <Intro />
                <Gallery />
                <About />
                <Testimonials />
            </div>
        )
    }
}

export default Home