import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="d-flex text-center justify-content-center py-3">
                    <a href="https://www.facebook.com/MUNTAIPEI/">
                        <div className="fb social-icon"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></div>
                    </a>
                    <a href="https://www.instagram.com/munchies.taipei/">
                        <div className="ig social-icon"><FontAwesomeIcon icon={['fab', 'instagram']}/></div>
                    </a>
                    <a href="https://www.yelp.com/biz/munchies-cafe-%E6%9D%BE%E5%B1%B1%E5%8D%80">
                        <div className="yp social-icon"><FontAwesomeIcon icon={['fab', 'yelp']}/></div>
                    </a>
                </div>
                <div className="copy-right text-center text-white py-2">
                    <p className="d-inline pr-2">&copy; 2018 Munchies Café ＆ Bistro</p>
                    <p className="d-inline border-left pl-2">All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer