import React from 'react';

class HoverIcon extends React.Component{
    constructor (props) {
      super(props);
      this.state= {
        hover: false
      };
    }
    
     handleHover() {
      this.setState({hover: !this.state.hover});
    }
    
    render() {
      var iconStyle={
        transform: this.state.hover ? 'translateY(-5px)' : 'none',
        boxShadow: this.state.hover ? '3px 3px 5px #000' : 'none',
        color: this.state.hover? "#fff" : "#aaa",
        background: this.state.hover? '#55acee' :'#222',
        transition: "all .3s", borderRadius: '50%', height: 50, width: 50,
        textAlign:'center', lineHeight: '50px'
      }
      return (
        <a href={this.props.href}><i className={this.props.icon} style={iconStyle} onMouseEnter={()=>this.handleHover()} onMouseLeave={()=>this.handleHover()}></i></a>
      )
    };    
}

export class HoverIconSample extends React.Component{
  render(){
    return(
      <HoverIcon href="#" icon="fa fa-2x fa-twitter" />
    );
  }
}

export class EventHoverSample01 extends React.Component{
  render(){
    return(
      <div className="container system-wrap">
        <h3 className="title-com">Hover Event - State, Inline Style</h3> 
        <div className="row">        
          <HoverIconSample />
        </div>
      </div>
    );
  }
}

export default EventHoverSample01;