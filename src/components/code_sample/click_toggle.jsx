import React from 'react';

import './click_toggle.scss';

class ToggleSwitch01 extends React.Component {
	constructor() {
		super();
		
		this.state = {
			checked: false
		};
		
		this.onToggleChange = this.onToggleChange.bind(this);
	}
	
	onToggleChange() {
		this.setState({
			checked: !this.state.checked
		});
	}
	
	render() {
		return (
			<div className='ToggleSwitch ToggleSwitch__rounded'>
				<div className='ToggleSwitch__wrapper'>
					<div className={`Slider ${this.state.checked && 'isChecked'}`} onClick={this.onToggleChange}></div>
				</div>
			</div>
		);
	}
}

export class ClickToggleSample01 extends React.Component{
  render(){
    return(
      <div className="container system-wrap">
        <h3 className="title-com">Click Event - Toggle Switch, Style Change</h3>
        <div className="row">        
          <ToggleSwitch01 />
        </div>
      </div>
    );
  }
}

export default ClickToggleSample01;