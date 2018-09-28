import React from 'react';

const posts = [
    {
        key: 'cardmedia01',
        id: 'http://www.wildernesstravel.com/images/trips/latin-america/argentina/in-patagonia/1-slide-patagonia-paine-national-park-cuernos-del-paine-pano.jpg', 
        title: 'Place One', 
        content: 'Where is this place'
    },
    {
        key: 'cardmedia02',
        id: 'https://www.switchbacktravel.com/sites/default/files/images/articles/Los%20Glaciares%20Patagonia.jpg', 
        title: 'Place 2', 
        content: 'Or this place'
    },
    {
        key: 'cardmedia03',
        id: 'http://www.wildernesstravel.com/images/trips/latin-america/argentina/in-patagonia/1-slide-patagonia-paine-national-park-cuernos-del-paine-pano.jpg', 
        title: 'Place One', 
        content: 'Where is this place'
    }
  ];

export class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} id={image} className="card-header">
          <h4 className="card-header--title">News</h4>
        </header>
      )
    }
  }
  
export class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
export class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
export class Card extends React.Component {
    render() {
        
        const listItems = posts.map((post) => {
            return(
                <article className="card-media1" key= {post.key}>
                    <CardHeader image={post.id} />
                    <CardBody title={post.title} text={post.content}/>
                </article>
            )
        });
       return <div className="row">{listItems}</div>;
    }
  }