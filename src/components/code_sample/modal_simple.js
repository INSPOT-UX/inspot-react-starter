import React from 'react';

import '../css/popup_simple.scss';

const Popup = ({ text, closePopup }) => (
    <div className='popup'>
      <div className='popup_inner'>
        <h4>{text}</h4>
        <button className="btn" onClick={closePopup}>close me</button>
      </div>
    </div>
  )
  
class PopupSimpleExample extends React.Component{
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      
      render() {
        return (
          <div className="container mt70">
            <button onClick={() => this.togglePopup()} className="btn round">show popup</button>
            {this.state.showPopup ? 
              <Popup
                text='Welcome to React'
                closePopup={() => this.togglePopup()}
              />
              : null
            }
          </div>
        );
    }
};

export default PopupSimpleExample;