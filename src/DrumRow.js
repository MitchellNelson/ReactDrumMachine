import React from 'react';
import ReactDOM from 'react-dom';
import DrumElement from './DrumElement';

class DrumRow extends React.Component {
  constructor(props){
    super(props);
  }
  renderRowElements(){
    var elements = [];
    for (var i = 0; i < this.props.numElements; i++){
      elements.push(<DrumElement soundPath={this.props.soundPath} play={this.props.playingIndex === i}/>);
    }
    return elements;
  }

  render() {
    return (
      <tr>
        <span>{this.props.name}</span>
        {this.renderRowElements()}
      </tr>
    );
  }
}

export default DrumRow;