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
      ]
    }
    this.draggedBox = null;
  }

  handleDragStart = (e, index) => {
    let evt = e;
    this.draggedBox = this.state.boxes[index];
    evt.dataTransfer.effectAllowed = "move";
  }

  handleDragOver = index => {
    const draggedOverBox = this.state.boxes[index];

    if (this.draggedBox === draggedOverBox) return;

    let boxes = this.state.boxes.filter(b => b !== this.draggedBox);

    boxes.splice(index, 0, this.draggedBox);

    this.setState({ boxes });
  }

  handleDragEnd = () => {
    this.draggedBox = null;
  };

  render () {
    return (
      <div>
        {this.state.boxes.map((c, i) => <Box
                               key = {c} 
                               handleDragStart={e => this.handleDragStart(e, i)}
                               handleDragOver={() => this.handleDragOver(i)} 
                               handleDragEnd={() => this.handleDragEnd()}
                               color = {c}/>)}
      </div>
    )
  }
}