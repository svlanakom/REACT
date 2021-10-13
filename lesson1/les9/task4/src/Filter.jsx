// import React from 'react'

// class Filter extends React.Component{

//   render(){
//     return(
//       <div className="filter">
//         <span className="filter__count">{this.props.count}</span>
//         <input type="text" className="filter__input" onChange={this.props.onChange} value={this.props.filterText} />
//       </div>
//     )
//   }
// }
// export default Filter




import React from 'react';

const Filter = ({ filterText, count, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input type="text" className="filter__input" onChange={onChange} value={filterText} />
  </div>
);

export default Filter;
