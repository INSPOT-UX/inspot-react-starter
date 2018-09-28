import React, { Component } from 'react';
import Slider from "react-slick";
import * as CardMedia1 from './cards/cardMedia1'
import * as CardMedia2 from './cards/cardMedia2'

import '../css/home.scss';

class Home extends Component {
    render() { 
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };     
      return(
        <div>        
          <div className="hero-full-wrap" id="home"></div>
          <section className="container">
            <div className="row justify-content-md-center mt40">
              <div className="col-sm-4 ta-c">
                <img src={require('../img/react_logo_big.png')} className="img-max" />
              </div>              
            </div>
            <div className="row mt20">
              <div className="col-md-4">
                <p className="card-title">Declarative</p>
                <p className="size2">
                React makes it painless to create interactive UIs. Design simple views for each state in your application, 
                and React will efficiently update and render just the right components when your data changes.<br></br><br></br>
                Declarative views make your code more predictable and easier to debug.
                </p>
              </div>
              <div className="col-md-4">
                <p className="card-title">Component-Based</p>
                <p className="size2">
                Build encapsulated components that manage their own state, then compose them to make complex UIs.
                <br></br><br></br>
                Since component logic is written in JavaScript instead of templates, 
                you can easily pass rich data through your app and keep state out of the DOM.
                </p>
              </div>
              <div className="col-md-4">
                <p className="card-title">Learn Once, Write Anywhere</p>
                <p className="size2">
                We don’t make assumptions about the rest of your technology stack, 
                so you can develop new features in React without rewriting existing code.
                <br /><br />
                React can also render on the server using Node and power mobile apps using React Native.
                </p>
              </div>
            </div>
          </section>
          <section className="home-full-slider mt50">
            <Slider {...settings}>
              <div className="slide">
                <h1>1</h1>
              </div>
              <div className="slide">
                <h1>2</h1>
              </div>
              <div className="slide">
                <h1>3</h1>
              </div>              
            </Slider>
          </section>

          <section className="container">
            <div className="row justify-content-md-center">
              <CardMedia1.Card />
              <CardMedia2.CardComponent />
            </div>
          </section>
        </div>     
      );
    }
  }

export default Home;