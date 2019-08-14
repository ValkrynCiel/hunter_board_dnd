import React, { Component } from 'react';

export default class Box extends Component {
  render () {
    let style = {
      height: '100px',
      width: '100px',
      backgroundColor: this.props.color
    }

    const { handleDragStart, handleDragOver, handleDragEnd } = this.props;

    return (
      <div 
        draggable 
        style = {style}
        onDragStart = { handleDragStart }
        onDragOver = { handleDragOver }
        onDragEnd = { handleDragEnd } 
        >
      </div>
    )
  }
}