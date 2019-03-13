import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <>
            <footer className="footer py-3 px-5">
                <div className="footer-wrap row">
                    <ul className='col pt-2 list-unstyled'>
                        <li>No.26, Aly.5, Ln.12, Sec.3, Bade RD.,</li>
                        <li>Taipei City, Taiwan</li>
                        <li>Open Everyday 11:30am ∼ 10:00PM</li>
                        <li>(02)2570-5508</li>
                    </ul>
                    <div className='footer-right col-12 col-md-5'>
                        <div className="social-list row">
                            <div className="col-1">
                                <a href="https://www.facebook.com/MUNTAIPEI/">
                                    <div className="fb social-icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} size="xs"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-1">

                                <a href="https://www.instagram.com/munchies.taipei/">
                                    <div className="ig social-icon">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} size="xs"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-2">

                                <a href="https://www.yelp.com/biz/munchies-cafe-%E6%9D%BE%E5%B1%B1%E5%8D%80">
                                    <div className="yp social-icon">
                                        <FontAwesomeIcon icon={['fab', 'yelp']} size="xs"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="copy-right row">
                            <p className="col-5">Munchies Café &amp; Bistro</p>
                            <p className="col-1 text-center">&#124;</p>
                            <p className="col-2">&copy;2019</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer