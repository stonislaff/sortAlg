import './column.scss'
import React from "react";


function Column(props){
    console.log(props);
    return(
        <div className="columnElement" style={props.objStyles}></div>
    )
}

export default Column