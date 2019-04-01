/**
 * @Author: ankit
 * @Date:   1985-10-26T13:45:00+05:30
 * @Email:  ankit@minance.com
 * @Last modified by:   ankit
 * @Last modified time: 2019-04-02T00:08:33+05:30
 * @Copyright: Minance Technologies Private Limited
 */

import React, { Component } from 'react';
import Tooltip from './Tooltip';

let customStyleTooltip = {
  backgroundColor: '#e7b770',
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{margin:'100px'}}>
      <Tooltip hoverComponent={<button>Right</button>}
               hoverText={"React Toolpit"}
               style={customStyleTooltip}
              />
      </div>
    );
  }
}

export default App;
