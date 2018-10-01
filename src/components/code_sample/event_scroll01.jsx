import React from 'react';
import './event_scroll01.scss';

class ScrollEvent extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      scrollTop: 0
    };    
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    const scrollTop = window.scrollY;
    this.setState({ "scrollTop": scrollTop });
  }
  
  render() {
    const { scrollTop } = this.state;
    const boxClass = () => {
      let boxClass;

      if(scrollTop <= 500) {
        boxClass = "is-green";
      } else if(scrollTop > 500 && scrollTop <= 1000) {
        boxClass = "is-yellow";
      } else if(scrollTop > 1000) {
        boxClass = "is-red";
      }
      return "box " + boxClass;
    }
    
    const one = <h2 className="subtitle is-2 one">0-500</h2>;
    const two = <h2 className="subtitle is-2 two">500-1000</h2>;
    const three = <h2 className="subtitle is-2 three">1000-</h2>;
    
    return(
      <div className={boxClass()}>
        <h2 className="title is-1">Top {this.state.scrollTop} px</h2>
        {scrollTop <= 500 && one}
        {scrollTop > 500 && scrollTop <= 1000 && two}
        {scrollTop > 1000 && three}
      </div>
    );
  }
}

class ScrollEventSample01 extends React.Component {
  render() {    
    return(
      <section className="scroll-section">
        <div className="container">
          <ScrollEvent />
        </div>
      </section>
    );
  }
}
export default ScrollEventSample01;