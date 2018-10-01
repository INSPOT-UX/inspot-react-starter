import React from 'react';

import '../css/popup_simple.scss';

const css = `
.box {
    display: block; width: 200px; height: 200px;
    background-color: gray;
    color: white; text-align: center;
    vertical-align: middle; cursor: pointer;
    border-radius: 100%; transition: all 0.3s;
  }
  .box.green {
    background-color: green; 
  }
  .box p{
    font-size: 22px; font-weight: 800; padding-top:calc(50% - 16px);
  }
`;
class ToggleExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {addClass: false}
    }
    toggle() {
      this.setState({addClass: !this.state.addClass});
    }
    render() {
      let boxClass = ["box"];
      if(this.state.addClass) {
        boxClass.push('green');
      }
      return(        
          <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
            <style>{css}</style> 
            {this.state.addClass ? <p>Remove a class</p> : <p>Add a class</p>}
          </div>       
      );
    }
  }

export default ToggleExample;