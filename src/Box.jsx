import React, { Component } from 'react';

export default class Box extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDragging: false
    }
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragStart = (e) => {
    this.props.handleDragStart(e, this.props.i);
    this.setState({ isDragging: true });
  }
  
  onDragOver = () => {
    this.props.handleDragOver(this.props.i);
  }

  onDragEnd = () => {
    this.props.handleDragEnd();
    this.setState({ isDragging: false });
  }

  render () {
    let style = {
      height: '100px',
      width: '100px',
      backgroundColor: this.props.color,
      position: 'relative',
      zIndex: 1000
    }

    let coverStyle = {
      height: '100px',
      width: '100px',
      backgroundColor: 'turquoise',
      position: 'relative',
      zIndex: 110
    }

    return (
      <div 
        draggable 
        style = {style}
        onDragStart = { this.props.handleDragStart }
        onDragOver = { this.props.handleDragOver }
        onDragEnd = { this.props.handleDragEnd} 
        >
          ????
      </div>
    )
  }
}