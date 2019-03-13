import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Menu.css'

// COMBOS
import comboCouples from '../../assets/img/combo-couples.jpg';
import comboFour from '../../assets/img/combo-four.jpg';
import comboDesert from '../../assets/img/combo-desert.jpg';

// APPETIZER
import crispyFries from '../../assets/img/crispy-fries.png';
import * as actions from "../../store/actions";
import {connect} from "react-redux";


class Menu extends Component {

    componentDidMount() {
        this.props.onMenuAppetizers();
    }


    render() {
        console.log(this.props.menuAppetizers);

        let menuItem;

        if (this.props.menuAppetizers && this.props.menuAppetizers.data.length) {
            menuItem = this.props.menuAppetizers.data.map((data, index) => (
                <div className="appetizer-item col-3" key={index}>
                    <div className='outer'>
                        <div className='inner'>
                            <img src={data.image} alt='Crispy Fries'/>
                        </div>
                    </div>
                    <h3>{data.itemName}</h3>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    <p></p>
                </div>
            ))
        }

        return (
            <div className='container'>
                <section className='combo-menu'>
                    <h2 className='combo-menu-heading text-center text font-weight-light'>MUNCHIES <em>Combos</em></h2>
                    <div className="combo-items row d-flex justify-content-around align-items-start text-center">
                        <div className="combo-item col-4">
                            <div className='outer'>
                                <div className='inner'>
                                    <img src={comboCouples} alt="couples' combo"/>
                                </div>
                            </div>
                            <h3>Couples' Combo</h3>
                            <ul className='combo-description list-unstyled'>
                                <li>Jamaican Roasted Spring Chicken Half</li>
                                <li>Lambed Beer Seafood Steamed</li>
                                <li>Cappuccino Tomato Puree Two</li>
                                <li>Strawberry Quail Song Salad</li>
                                <li>Oil Sealed Duck Pizza / Fig / Margarita</li>
                                <li>Sands Pumpkin Stew Rice</li>
                                <li>Bomb Ice Cream</li>
                                <li>House Two glasses of red or white wine</li>
                            </ul>
                            <p>$2,200</p>
                        </div>
                        <div className="combo-item col-4">
                            <div className='outer'>
                                <div className='inner'>
                                    <img src={comboFour} alt="four ppl combo"/>
                                </div>
                            </div>
                            <h3>Four People Combo</h3>
                            <ul className='combo-description list-unstyled'>
                                <li>American Choice Tomahawk Steak 40 oz</li>
                                <li>Crispy Fried Potato Truffle / Garlic Sauce</li>
                                <li>Chef Caesar Salad - Bean Curd Popcorn Chicken</li>
                                <li>Oil Seal Duck Pizza / Fig / Margaret</li>
                                <li>Special Meatballs Italian Noodles</li>
                                <li>$140 4 cups of drinks</li>
                            </ul>
                            <p>$3,980</p>
                        </div>
                        <div className="combo-item col-4">
                            <div className='outer'>
                                <div className='inner'>
                                    <img src={comboDesert} alt="desert combo"/>
                                </div>
                            </div>
                            <h3>Desert Combo 13:00-17:00</h3>
                            <ul className='combo-description list-unstyled'>
                                <li>Afternoon Tea Set [A] $210 - TWG Earl Grey Hurricane Cake + $150 Drinks Optional B
                                    Cup
                                </li>
                                <li>Afternoon Tea Set [B] $260 - Handmade Lemon Tower + $150 Drinks Optional B Cup</li>
                                <li>Afternoon Tea Set [C] $280 - Season Muffins Ice Cream + $150 Drinks Optional B Cup
                                </li>
                                <li>Afternoon Tea Set [D] $335 - Hawaiian Yogurt Bowl + $150 Drink Optional Cup</li>
                            </ul>
                            <p>$210</p>
                        </div>
                    </div>
                </section>
                <section className="appetizer-menu text-center py-5">
                    <h2 className='font-weight-light py-5'>Appetizer</h2>
                    <div className="row d-flex align-items-start font-weight-light">
                        {menuItem}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuAppetizers: state.menuAppetizers
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onMenuAppetizers: () => dispatch(actions.initialMenuAppetizers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
