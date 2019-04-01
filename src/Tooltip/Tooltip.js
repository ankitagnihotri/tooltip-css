/**
 * @Author: ankit
 * @Date:   2019-04-01T14:41:30+05:30
 * @Email:  ankit@minance.com
 * @Last modified by:   ankit
 * @Last modified time: 2019-04-02T00:09:07+05:30
 * @Copyright: Minance Technologies Private Limited
 */

 import React from 'react';
 import './Tooltip.css';

 const Tooltip = (props) => {
   return (
     <div className="CustomTooltip">
       {props.hoverComponent}
       <span className="TooltipText" style={props.style}>{props.hoverText}</span>
     </div>
   );
 };

 export default Tooltip;
