import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return 	<div id='map_canvas'></div>;
  }
}

render(<App/>, document.getElementById('app'));