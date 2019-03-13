import React, {Component} from 'react';
import './Menu.css'

import ComboCouples from '../../assets/img/combo-couples.jpg';
import ComboFour from '../../assets/img/combo-four.jpg';
import ComboDesert from '../../assets/img/combo-desert.jpg';


class Menu extends Component {
    render() {
        return (
            <div>
                <section id='ts-meal'>
                    <div className='fill-space'></div>
                    <h2 className='text-center m-5 font-weight-light'>MUNCHIES <em>Combos</em></h2>
                    <div className="ts-meal container d-flex justify-content-around text-center">
                        <div className="ts-item ">
                            <div className='outer'>
                                <div className='inner'>
                                    <img src={ComboCouples} alt="couples' combo"/>
                                </div>
                            </div>
                            <h3>Couples' Combo</h3>
                            <p className='combo-description'>
                                - Jamaican Roasted Spring Chicken Half - Lambed Beer Seafood Steamed - Cappuccino Tomato
                                Puree Two - Strawberry Quail Song Salad - Handmade Pizza Oil Sealed Duck / Fig /
                                Margarita - Sands Pumpkin Stew Rice - Bomb Ice Cream - House Two glasses of red or white
                                wine
                            </p>
                            <p>$2,200</p>
                        </div>
                        <div className="ts-item ">
                            <div className='outer'>
                                <div className='inner'>
                                    <img src={ComboFour} alt="four ppl combo"/>
                                </div>
                            </div>
                            <h3>Four People Combo</h3>
                            <p className='combo-description'>
                                American Choice Tomahawk Steak 40 oz - Crispy Fried Potato Truffle Sauce / Garlic Sauce
                                - Chef Caesar Salad - South Milk Fried Chicken Nuggets - Handmade Pizza Oil Seal Duck /
                                Fig / Margaret - Special Meatballs Italian Noodles - $140 4 cups of drinks
                            </p>
                            <p>$3,980</p>
                        </div>
                        <div className="ts-item ">
                            <div className='outer'>
                                <div className='inner'>
                                    <img src={ComboDesert} alt="desert combo"/>
                                </div>
                            </div>
                            <h3>Desert Combo 13:00-17:00</h3>
                            <p className='combo-description'>
                                Afternoon Tea Set [A] $210 - TWG Earl Grey Hurricane Cake + $150 Drinks Optional B Cup
                                Afternoon Tea Set [B] $260 - Handmade Lemon Tower + $150 Drinks Optional B Cup Afternoon
                                Tea Set [C] $280 - Season Muffins Ice Cream + $150 Drinks Optional B Cup Afternoon Tea
                                Set [D] $335 - Hawaiian Yogurt Bowl + $150 Drink Optional Cup
                            </p>
                            <p>$210</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Menu