import React from 'react';
import Button from 'react-bootstrap/lib/Button';

import './index.scss';

const ButtonSample = () => {
  return (
      <div className="container system-wrap">
        <h2>Bootstrap Buttons</h2>
                 
        <div className="row">            
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
        <h5>Outline buttons</h5>
        <div className="row">        
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </div>
        <h5>Button tags</h5>
        <div className="row">        
          <Button href="#">Link</Button>
          <Button type="submit">Button</Button>
          <Button as="input" type="button" value="Input" />
          <Button as="input" type="submit" value="Submit" />
          <Button as="input" type="reset" value="Reset" />
        </div>
        
        <h5>Button Size</h5>
        <div className="row">        
          <Button variant="primary" size="lg">
            Large button
          </Button>
          <Button variant="secondary" size="lg">
            Large button
          </Button>
        </div>
        <div className="row">        
          <Button variant="primary" size="sm">
            Small button
          </Button>
          <Button variant="secondary" size="sm">
            Small button
          </Button>
        </div>
        <div className="row">        
          <Button variant="primary" size="lg" block>
            Block button
          </Button>
          <Button variant="secondary" size="lg" block>
          Block button
          </Button>
        </div> 
      </div>
  );
}

export default ButtonSample;

