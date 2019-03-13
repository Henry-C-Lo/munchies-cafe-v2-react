import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from '../assets/img/logo.png';



class NavBar extends Component {
    state = { isHide: false };

    hideBar = () => {
        const { isHide } = this.state

        window.scrollY > this.prev ?
            !isHide && this.setState({ isHide: true })
            :
            isHide && this.setState({ isHide: false });

        this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.hideBar);
    }
    render() {
        const classHide = this.state.isHide ? 'hide' : '';
        return (
                <Navbar className={`topbar main-nav d-flex justify-content-around fixed-top ${classHide}`} expand="lg">
                    <Navbar.Brand href="#home">
                        <img height='60' src={ Logo } alt='logo'/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link className='text-white font-weight-light' href="/">Home</Nav.Link>
                        <Nav.Link className='text-white font-weight-light' href="#about">About</Nav.Link>
                        <Nav.Link className='text-white font-weight-light' href="/Menu">Menu</Nav.Link>
                        <Nav.Link className='text-white font-weight-light' href="/Reservation">Reservation</Nav.Link>
                    </Nav>
                </Navbar>
        );
    }
}


export default NavBar;

