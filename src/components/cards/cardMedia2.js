import React from 'react';

const styles = {
    width: '30%',
    backgroundColor: '#F7F7F7',
    padding: 10,
    display: 'inline-block',
    margin: 10
  }
  
  const posts = [
    {
        id: 'http://www.wildernesstravel.com/images/trips/latin-america/argentina/in-patagonia/1-slide-patagonia-paine-national-park-cuernos-del-paine-pano.jpg', 
        title: 'Place One', 
        content: 'Where is this place'
    },
    {
        id: 'https://www.switchbacktravel.com/sites/default/files/images/articles/Los%20Glaciares%20Patagonia.jpg', 
        title: 'Place 2', 
        content: 'Or this place'
    },
    {
        id: 'http://www.wildernesstravel.com/images/trips/latin-america/argentina/in-patagonia/1-slide-patagonia-paine-national-park-cuernos-del-paine-pano.jpg', 
        title: 'Place One', 
        content: 'Where is this place'
    }
  ];
  
  
  export class CardComponent extends React.Component {                     
    render() {
      const listItems = posts.map((post, i) => {
        return (
          <li style={styles} key= {i}>
            <img src={post.id} />
            <div className="c-card__content">
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <ButtonClick />
            </div>
          </li>
        )
      });
      return <ul> {listItems} </ul>;
    }                                 
  }
  
  
  export class ButtonClick extends React.Component {     
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0
      }
      this.AddOne = this.AddOne.bind(this);
    }
    
    AddOne() {
      this.setState ( {
        clicks: this.state.clicks + 1 
      } );
    }
    
    render() {
      return <button className="c-button" onClick={this.AddOne}>{this.state.clicks}</button>;
    }                                 
  }