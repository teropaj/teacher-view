import React, { Component } from 'react';
import './css/Swipe.css'
//import './App.css';
import ReactSwipe from 'react-swipe';

const Carousel = (props) => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
        
      >
        <div id="pane1" className="carousel"   >PANE 1</div>
        <div id="pane2">PANE 2</div>
        <div id="pane3">PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};


class Swipe extends Component {
  render() {
    let reactSwipeEl;
    return (
      <div className="App"  style={{textAlign: 'left'}}>
        <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div id="pane1" className="carousel"   >{this.props.panes[0]}</div>
        <div id="pane2" className="carousel">PANE 2</div>
        <div id="pane3" className="carousel">PANE 3</div>
      </ReactSwipe>
      <button style={{float: 'right'}} onClick={() => reactSwipeEl.next()}>Next</button>
      <button style={{float: 'left'}}onClick={() => reactSwipeEl.prev()}>Previous</button>
      </div>
    );
  }
}

export default Swipe;
