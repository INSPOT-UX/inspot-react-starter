import React from 'react';
import CarouselBasic01 from './carousel_basic_01.jsx';
import Carousel from 'react-bootstrap/lib/Carousel';


export class CarouselSample1 extends React.Component {
    render(){
        return(
            <div className="container system-wrap">
              <h2 className="title-head">Carousel 예시</h2>
              <h3 className="title-com">Carousel - 단순한 구현예시</h3> 
                    <div className="row justify-content-md-center">
                        <CarouselBasic01 />
                    </div><br /><br />
              <h3 className="title-com">Carousel - React Bootstrap4 예시</h3> 
                    <div className="row justify-content-md-center" style={{marginTop:'2rem'}}>
                        <ControlledCarousel />
                    </div>
            </div>            
        )
    }
}

// React-Bootatrap 4 Carousel sample
// https://react-bootstrap.netlify.com/components/carousel/

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item style={{background:'#999', height:'500px'}}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{background:'#999', height:'500px'}}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{background:'#999', height:'500px'}}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

export default CarouselSample1;
