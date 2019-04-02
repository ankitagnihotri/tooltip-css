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
import './App.css';

let customStyleTooltip = {
  backgroundColor: '#e7b770',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Tooltip hoverComponent={<button>Right Tooltip</button>}
                   hoverText={"React Toolpit"}
                   position={'right'}
                   style={customStyleTooltip}
          />
        </div>
        <div>
          <Tooltip hoverComponent={<button>Left Tooltip</button>}
                   hoverText={"React Toolpit"}
                   position={'left'}
                   style={customStyleTooltip}
          />
        </div>
        <div>
          <Tooltip hoverComponent={<button>Top Tooltip</button>}
                   hoverText={"React Toolpit"}
                   position={'top'}
                   style={customStyleTooltip}
          />
        </div>
        <div>
          <Tooltip hoverComponent={<button>Bottom Tooltip</button>}
                   hoverText={"React Toolpit"}
                   position={'bottom'}
                   style={customStyleTooltip}
          />
        </div>
      </div>
    );
  }
}

export default App;
