import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import munchies from '../assets/img/munchies.jpg'

const Intro = () => {
    return (
        <>
            <section className="intro">
                <div className="container">
                    <ul className="my-5 py-5 text-center font-weight-light list-unstyled">
                        <li>
                            <FontAwesomeIcon color='orangered' icon={['fa', 'glass-cheers']} size="2x"/>
                        </li>
                        <li className="row my-5 slogan font-weight-normal">
                            <p className='col-10 col-md-6 mx-auto my-5'>
                                Celebrating the
                                <em>&nbsp;finest New American cuisine&nbsp;</em>
                                for an exceptional and relaxed dining experience
                                <em>&nbsp;near Taipei Arena</em>
                            </p>
                        </li>
                        <li className='pl-2'>
                            <img height={120} src={munchies} alt='munchies'/>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Intro