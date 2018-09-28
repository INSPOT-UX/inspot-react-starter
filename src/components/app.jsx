import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

export class First extends Component {
  render() {
    return (
      <div>
        <h2>1, 첫번째 페이지</h2>
      </div>
    );
  }
}

export class Second extends Component {
  render() {
    return (
      <div>
        <h3>2, 두번째 페이지</h3>
      </div>
    );
  }
}

export class Third extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/1`} style={{ marginRight: '5px' }}>
          1번
        </Link>
        <Link to={`${this.props.match.url}/2`}>
          2번
        </Link>
        
          <Route
            exact path={this.props.match.url}
            render={() => <div><h3>id를 선택해 주세요.</h3></div>}
          />
          <Route path={`${this.props.match.url}/:id`} component={Item} />
        
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.id}</h3>
      </div>
    );
  }
}