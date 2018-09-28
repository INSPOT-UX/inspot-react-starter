import React from 'react';

const ColorDataPrimarys = [
    {   
        key: "primary01",
        name: "Primary01",
        hex: "#0052CC"
    },
    {
        key: "primary02",
        name: "Primary02",
        hex: "#172B4D"
    },
    {
        key: "primary03",
        name: "Primary03",
        hex: "#FFFFFF"
    }
];

export class ColorCard extends React.Component {    
    render(){
        const listPrimary = ColorDataPrimarys.map((ColorDataPrimary) => {            
            return(
                <div className="color-swatch-wrap col-sm-4"  key= {ColorDataPrimary.key}>
                    <div className="color-swatch">
                        <div className="color-swatch-header" style={{backgroundColor: ColorDataPrimary.hex}}>
                        </div>
                        <div className="color-swatch-body">
                            <p>{ColorDataPrimary.name}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return <div className="row">{listPrimary}</div>;
    }
}

export class StyleColor extends React.Component {
    render() {      
      return (
        <article className="container system-wrap">
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <h1>Color</h1>
                    <p>
                    Where appropriate, we enable people to introduce their own color palettes. 
                    Our products adapt intelligently and flexibly to cater to people's preferences. 
                    We are also committed to complying with AA standard contrast ratios. To do this, 
                    choose primary, secondary, and extended colors that support usability by ensuring 
                    sufficient color contrast between elements so that people with low vision can see 
                    and use the interface.
                    </p>
                    <h2>Primary color palette</h2>                
                </div>
            </div>
                
                <ColorCard />
                

        </article>
        )
    } 
  }

export default StyleColor;

  
  