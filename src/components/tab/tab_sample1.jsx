import React from 'react';
import TabType01 from './tab_type01.jsx';

class TabSample01 extends React.Component {

    render() {      
  
      return(
        <div className="container system-wrap">
            <h2 className="title-head">Tab 예시</h2>
            <h3 className="title-com">Button - 단순한 구현예시</h3>          
            <div className="row">                
                <TabType01 />
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


            

        </div>
      );
    }
  }
  
  export default TabSample01;