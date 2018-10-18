import React, { Component } from 'react';

export default class Title extends React.Component {
    render() {
      // 3rd step, refer back to props
        return (
          <div>
           <h1>{this.props.title}</h1>
          </div>
        );
    }

}
