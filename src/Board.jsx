import React, { Component } from 'react';
import Box from './Box';

export default class Board extends Component {
  constructor (props) {
    super(props);
    this.state = {
      boxes: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
      ],
      draggedBox: null
    }
    // this.handleDragStart = this.handleDragStart.bind(this);
    // this.handleDragOver = this.handleDragOver.bind(this);
    // this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragStart = (e, index) => {
    let target = e.target;
    this.setState({draggedBox: this.state.boxes[index]});
    e.dataTransfer.effectAllowed = "move";
    setTimeout(() => { 
      target.style.opacity = 0.5;
      target.style.margin = '1.5em'
    }, 0);
    console.log('start')
  }

  handleDragOver = index => {
    console.log('over')
    const draggedOverBox = this.state.boxes[index];

    if (this.state.draggedBox === draggedOverBox) return;

    let boxes = this.state.boxes.filter(b => b !== this.state.draggedBox);

    boxes.splice(index, 0, this.state.draggedBox);

    this.setState({ boxes });
  }

  handleDragEnd = (e) => {
    console.log('end')
    e.target.style.opacity = 1;
    e.target.style.margin = '0'
    this.setState({draggedBox: null})
  };

  render () {
    let style = {
      backgroundColor: 'black',
      zIndex: 10,
      width: '1000px',
      height: '1000px'
    }
    return (
      <div style = {style}>
        {this.state.boxes.map((c, i) => <Box
                               key = {c}
                               isDragging = {this.state.draggedBox === c} 
                               handleDragStart={e => this.handleDragStart(e, i)}
                               handleDragOver={() => this.handleDragOver(i)} 
                               handleDragEnd={e => this.handleDragEnd(e)}
                               color = {c}/>)}
      </div>
    )
  }
}