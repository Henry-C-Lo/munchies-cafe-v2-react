import React, {Component} from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'

class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            buttonPressed: ''
        }
    }

    handleClick = (button) => {
        this.setState({ buttonPressed: button })
    }



    render() {
        return (
            <div>
                <section className={ `gallery text-center font-weight-light text-light ${ this.state.buttonPressed }` }>
                    <ButtonGroup className='w-100'>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-1')}>
                            <h3>肋眼牛排佐歐芹醬</h3>
                            <p>Ribeye Steak with Chimichurri Sauce</p>
                        </Button>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-2')}>
                            <h3>特製戰斧牛排</h3>
                            <p>Tomahawk Steak </p>
                        </Button>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-3')}>
                            <h3>鹽釜烤鮮魚</h3>
                            <p>Salt Crust Fish Bake</p>
                        </Button>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-4')}>
                            <h3>酥炸軟殼蟹蒜香辣椒義大利麵</h3>
                            <p>Spicy Soft Shell Crap Linguini</p>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className='w-100'>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-5')}>
                            <h3>野生明蝦南瓜海鮮湯</h3>
                            <p>Pumpkin Seafood Soup with Wild Prawn</p>
                        </Button>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-6')}>
                            <h3>乾煎水蜜桃羽衣甘藍沙拉</h3>
                            <p>Kale &amp; Peach Salad</p>
                        </Button>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-7')}>
                            <h3>香煎櫻桃鴨胸義大利陳醋醬</h3>
                            <p>Cherry Valley Duck with Balsamic Reduction</p>
                        </Button>
                        <Button className="meal btn-theme w-25" onClick={() => this.handleClick('meal-bg-8')}>
                            <h3>松露野菇燉飯搭法國牛肝蕈及日本鮮干貝</h3>
                            <p>Truffle Mushroom Risotto with Scallop</p>
                        </Button>
                    </ButtonGroup>
                </section>
            </div>
        )
    }
}

export default Gallery