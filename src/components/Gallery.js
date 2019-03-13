import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class Gallery extends Component {


    state = {
        currentIndex: 0,
        backgroundClass: 'meal-bg-1'
    };


    handleClick = (currentIndex) => {
        console.log(currentIndex);
        this.setState({currentIndex});
    };

    render() {
        let galleryList;

        if (this.props.galleryData && this.props.galleryData.data.length) {
            console.log(this.props.galleryData);
            galleryList = this.props.galleryData.data.map((data, index) => (
                <div className='d-inline w-100' key={index}>
                    <Button
                        className="meal"
                        onClick={() => this.handleClick(index)}
                    >
                        <h3>{data.chineseTitle}</h3>
                        <p>{data.englishTitle}</p>
                    </Button>
                </div>
            ))
        }


        const currentBg = () => {
            console.log(this.state.currentIndex);
            return `meal-bg-${this.state.currentIndex + 1 }`;
        };
        return (
            <>
                <section className={`${this.state.backgroundClass} gallery text-center font-weight-light text-light`}>
                    <div className={currentBg()}>
                        {galleryList}
                    </div>
                </section>
            </>
        )
    }
}


export default Gallery