import React from 'react'
import doubleSevenFood from '../assets/img/77food.jpg'
import fourFoodie from '../assets/img/4foodie.jpg'
import foodelicious from '../assets/img/foodelicious.jpg'

const Testimonials = () => {
    return (
        <>
            <section className="testimonials text-light">
                <h2 className='display-4 text-center text-light text-capitalize'>do you trust <em>me</em>?</h2>
                <div className="container">
                    <div className="row d-flex">
                        <div className="p-2 col-12 col-md-4">
                            <blockquote className="blockquote">
                                <p className="p-3">這間份量超驚人的戰斧牛排，40盎司適合4-6人分食（我們4個人吃滿足感超高!）Choice等級牛排肉表層烤到微焦，但肉質出乎意料的軟嫩，油花香氣搭配著海鹽和綿密烤大蒜，一掃之前對於戰斧牛排容易偏乾不好咬的印象！甚至連冷掉之後都滿好吃的!</p>
                                <footer className="p-3">
                                    <a href='https://www.instagram.com/p/BiRgBtDFabn/?taken-by=77.food'>
                                        <img src={doubleSevenFood} className="rounded-circle align-middle m-3"
                                             alt='77food'/>
                                        <cite className="align-middle">77.food</cite>
                                    </a>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="p-2 col-12 col-md-4">
                            <blockquote className="blockquote">
                                <p className="p-3">特製戰斧牛排可4-6人分食，超扯大一份!!!軟嫩的程度讓我有嚇到，因為不論是厚度還是切的大小，我都以為即便多好咬也還是需要用到刀子切他，但沒想到真的就是豪邁用叉子叉著就可以用嘴巴咬著一口口吃了xoxo️超驚訝～這真的很推！</p>
                                <footer className="p-3">
                                    <a href='https://www.instagram.com/p/BiRgBtDFabn/?taken-by=77.food'>
                                        <img src={fourFoodie} className="rounded-circle align-middle m-3"
                                             alt='4foodie'/>
                                        <cite className="align-middle">4foodie</cite>
                                    </a>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="p-2 col-12 col-md-4">
                            <blockquote className="blockquote">
                                <p className="p-3">Similar with ABV Bar & Kitchen, it has outdoor seats. The indoor
                                    design is dominated by bright white color, which is similar with Field restaurant.
                                    Surprisingly, Munchies Cafe also offers draft beer just like “My Yacht Taproom”.
                                    They also sells coffee, dessert and special drinks.</p>
                                <footer className="p-3">
                                    <a href='http://globalfoodelicious.com/munchies-cafe/'>
                                        <img src={foodelicious} className="rounded-circle align-middle m-3"
                                             alt='foodelicious'/>
                                        <cite className="align-middle">娜姐 Foodelicious</cite>
                                    </a>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Testimonials