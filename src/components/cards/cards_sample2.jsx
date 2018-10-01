import React from 'react';
import './cards_sample2.scss';

export class CardsSample02 extends React.Component {
    render(){
        return(
            <div className="container system-wrap">
                <div className="row">
                    <div className="card-simple-text col-12 col-sm-6 col-md-4">
                        <div className="card text1">
                            <h1 className="underbar">Text 카드 타이틀</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                    </div>
                    <div className="card-simple-text col-12 col-sm-6 col-md-4">
                        <div className="card text1">
                            <h1 className="underbar">Text 카드 타이틀</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                    </div>
                    <div className="card-simple-text col-12 col-sm-6 col-md-4">
                        <div className="card text1">
                            <h1 className="underbar">Text 카드 타이틀</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-type3-wrap col-12 col-sm-6 col-md-4">
                <div className="post-module">
                   
                    <div className="thumbnail">
                        <div className="date">
                        <div className="day">27</div>
                        <div className="month">Mar</div>
                        </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                    </div>
                    
                    <div className="post-content">
                        <div className="category">Photos</div>
                        <h1 className="title">City Lights in New York</h1>
                        <h2 className="sub_title">The city that never sleeps.</h2>
                        <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                        <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">o</i> 6 mins ago</span><span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default CardsSample02;
