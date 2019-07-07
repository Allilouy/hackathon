import React from 'react'

class Item extends React.Component{ 
 render(){ return(<div>
        <li onClick={this.props.onClick} style={this.props.style}>{this.props.item + this.props.index}
        </li> 
        <button onClick={this.props.delete}>{`delete` + this.props.index} </button>
        </div>);
}}
export default Item