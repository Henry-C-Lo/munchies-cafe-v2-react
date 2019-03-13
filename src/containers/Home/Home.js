import React, {Component} from 'react';
import Hero from "../../components/Hero";
import Intro from '../../components/Intro';
import Gallery from '../../components/Gallery';
import About from '../../components/About';
import Testimonials from '../../components/Testimonials';
import * as actions from '../../store/actions';
import {connect} from 'react-redux'


class Home extends Component {

    componentDidMount() {
        this.props.onGetHomeGallery();
    }

    render() {
        return (
            <div className='home' id='home'>
                <Hero />
                <Intro />
                <Gallery galleryData={this.props.gallery}/>
                <About />
                <Testimonials />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gallery: state.gallery
    };

};


const mapDispatchToProps = dispatch => {
    return {
        onGetHomeGallery: () => dispatch(actions.initialHomeGallery())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);