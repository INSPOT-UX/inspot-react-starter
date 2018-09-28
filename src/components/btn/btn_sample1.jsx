import React from 'react';
import {ButtonType02, ButtonType03} from './button_type02.jsx';
import ButtonStyled01 from './button_styled01.jsx';

class ButtonSample01 extends React.Component {

    render() {      
  
      return(
        <div className="container system-wrap">
            <h2 className="title-head">Button 예시</h2>
            <h3 className="title-com">Button - 단순한 구현예시</h3>          
            <div className="row">                
                <ButtonType02  title="Sample Button" variant="button-type02" />
                <ButtonType02  title="Sample Button" variant="button-type02 round-sm" />
                <ButtonType02  title="Sample Button" variant="button-type02 round-half" />
                <ButtonType02  title="Sample Button" variant="button-type02 outlined" />
                <ButtonType02  title="Sample Button" variant="button-type02 outlined round-sm" />
                <ButtonType02  title="Sample Button" variant="button-type02 outlined round-half" />
            </div>
            <div className="row">
                <pre className="code-react">
{`
    export class ButtonType02 extends React.Component {
        render() {
            const {variant,title,icon, ...others} = this.props;
                return (          
                    <button className={variant} {...others}>
                        {title}
                    </button>
                )
        }
    }
`}
                </pre>
            </div>

            <h3 className="title-com">Button - PropTypes, Classname 적용 예시</h3>
            <p>

            </p>
            <div className="row">
                <ButtonType03 />
            </div>

            
            <div className="row">
                <pre className="code-react">
                    <code>
{`
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
`}
                    </code>
                </pre>
            </div>
            
            <h3 className="title-com">Styled Component 적용 예시</h3>
            <p>

            </p>
            <div className="row">
                <ButtonStyled01>Button</ButtonStyled01> <ButtonStyled01 big>Button</ButtonStyled01>
            </div>
            <div className="row">
                <pre className="react-code">
                    <code>
                        
                    </code>
                    
                </pre>
            </div>
        </div>
      );
    }
  }
  
  export default ButtonSample01;