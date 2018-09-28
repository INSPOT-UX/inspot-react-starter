import React from 'react';

export class BadgeOnText extends React.Component {
    render() {
      const style = {
        container: {
          position: 'relative',
          display: 'inline-flex',
          verticalAlign: 'middle',
        },
        badge: {
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '-0.5rem',
          right: '-0.5rem', 
          backgroundColor: 'red',
          color: 'white',
          width: '1rem',
          height: '1rem',
          borderRadius: '50%',
          fontSize: '0.8rem',
          zIndex: 1,
        },
      }
      
      return (
        <div style={style.container}>
          { this.props.children }
          <span style={style.badge}>{ this.props.badgeContent }</span>
        </div>)
    } 
  }
/* Render Example
<Badge badgeContent="2" >badge</Badge>
*/

  
  