import React from 'react'

import bgCoffee from '../assets/img/about-bgCoffee.png';
import bgPpl from '../assets/img/about-bgPpl.png';
import bgFood from '../assets/img/about-bgFood.png';

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <h2 className="text-center display-4 py-5 my-5">About <em>MUNCHIES</em></h2>
                    <div className="about-text-photo row d-flex align-items-center py-3 ">
                        <div className="col-12 text-center col-md-6 font-weight-light p-5">
                            <ul className="list-unstyled">
                                <li>Munchies Cafe & Bistro</li>
                                <li>It’s an elegant glimpse of a hidden city</li>
                                <li>&nbsp;</li>
                                <li>Enjoy the taste that we bring back from all over the world and our insist on real
                                    ingredients
                                </li>
                                <li>You can order a cup of aromatic coffee that we brew for you or a delicious draft
                                    beer
                                </li>
                                <li>Immerse yourself in this comfortable and relaxing space and throw away the pressure
                                    on your
                                    shoulders
                                </li>
                                <li>&nbsp;</li>
                                <li>Enjoy the satisfaction of the taste buds / The feast of the senses / Taste the
                                    attitude of life.
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <img width='100%' src={bgCoffee} alt='Coffee'/>
                        </div>
                    </div>
                    <div className="about-text-photo row d-flex align-items-center ">
                        <div className="col-12 col-md-6">
                            <img width='100%' src={bgPpl} alt="People"/>
                        </div>
                        <div className="col-12 col-md-6 font-weight-light p-5 my-4">
                            <ul className="list-unstyled">
                                <li>
                                    We are committed to providing a comfortable and relaxing environment for everyone to
                                    enjoy,
                                    while enjoying the immersion in a relaxed atmosphere, and expecting any form of
                                    dinner to become
                                    more meaningful.
                                </li>
                                <li>&nbsp;</li>
                                <li>
                                    Our persistence is simple but not simple.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 font-weight-light p-5">
                            <ul className="list-unstyled">
                                <li>
                                    Munchies originally meant "mouth", and we hope to bring all the
                                    friends to experience the simple level and taste when they enjoy the meal.
                                </li>
                                <li>&nbsp;</li>
                                <li>
                                    For ingredients
                                </li>
                                <li>
                                    We pay attention to safe and healthy nutrition and insist on using the best raw
                                    materials.
                                </li>
                                <li>
                                    For the environment
                                </li>
                                <li>
                                    We care about being clean and looking forward to a pleasant dining environment.
                                </li>
                                <li>
                                    For service
                                </li>
                                <li>
                                    We look forward to bringing guests a relaxed atmosphere like seeing friends.
                                </li>
                                <li>
                                    Cooking aspect
                                </li>
                                <li>
                                    Cook with raw materials called quality,
                                </li>
                                <li>
                                    Modulated by a technique called creativity,
                                </li>
                                <li>
                                    Give the soul of the cooking with an embellishment called a breakthrough.
                                </li>
                                <li>
                                    Use the ingredients to make the taste more amazing.
                                </li>
                                <li>&nbsp;</li>
                                <li>
                                    At MUNCHIES, you can enjoy more than just meals.
                                </li>
                                <li>
                                    It is a life attitude.
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <img width='100%' src={bgFood} alt="Food"/>
                        </div>
                    </div>
                    <p className="key-word w-50 d-block mx-auto text-center py-5 mb-5">
                        <em className="d-block">MUNCHIES</em>
                        offers not only food but also a
                        <em className="d-block text-capitalize">life attitude</em>
                    </p>
                </div>
            </section>
        </>
    )
};

export default About