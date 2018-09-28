import React from 'react';

import '../components/btn/btn_basic.scss';

const css = `
  button { margin: 1rem 2rem;}
`;
class BtnExample extends React.Component {
    render(){
        return (            
            
            <div>
            <style>{css}</style>    
                       
                <button className="btn">Login</button>
                <button className="btn ghost">Login</button>
                <button className="btn round">Login</button>
                <button className="btn round ghost">Login</button>
                        
                <button className="btn width-full">Login</button>
                  
            </div>            
        );
    }
}

export default BtnExample;

