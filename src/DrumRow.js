import React from 'react';
import DrumElement from './DrumElement';

class DrumRow extends React.Component {
  constructor(props){
    super(props);
  }
  renderRowElements(){
    var elements = [];
    for (var i = 0; i < this.props.numElements; i++){
      elements.push(<DrumElement key={i} soundPath={this.props.soundPath} play={this.props.playingIndex === i}/>);
    }
    return elements;
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        {this.renderRowElements()}
      </tr>
    );
  }
}

export default DrumRow;