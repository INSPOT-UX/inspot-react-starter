import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button_type02.scss';

export class ButtonType02 extends React.Component {

    render() {
      const {variant,title,icon, ...others} = this.props;
      
      return (          
        <button className={variant} {...others}>
          <i></i><span>{title}</span>
        </button>
      )
    }
  }

export class ButtonType03 extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['NORMAL', 'BIG']),
        disabled: PropTypes.bool,
        value: PropTypes.string,
        icon: PropTypes.string,
    }

    static defaultProps = {
        type: 'NORMAL',
        disabled: false,
        value: 'Upload image',
        icon: 'cloud_upload',
    }

    state = {
        hovered: false,
    }

    _getClassNames = () => {
        const { type, disabled } = this.props;
        const { hovered } = this.state;
        
        return classNames('Button', {
           ['Button--big']: type === 'BIG',
           ['Button--disabled']: disabled,
           ['Button--hovered']: hovered,
        });
    };
    
    render() {
        const { value, icon } = this.props;
        
        return (
            <button
                className={this._getClassNames()}
                /* Hover is handled via JavaScript instead of just CSS for demo purposes only. */
                onMouseOver={() => this.setState({ hovered: true })}
                onMouseOut={() => this.setState({ hovered: false })}
            >
                {icon && <div className="Button__icon">{icon}</div>}
                <div className="Button__value">{value}</div>
            </button>
        );
    }
}

export default ButtonType02;

