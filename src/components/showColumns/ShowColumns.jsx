import React from "react";
import Column from '../columnComponent/column'
function ShowColumns(props){
    let columnArr = [];
    for (let i = 0; i < props.numArr.length; i++){
        let columnHeight = `${props.numArr[i] * 20}px`;
        console.log(props.numArr[i])
        const styles = {
            height: columnHeight
        }
        columnArr.push(<Column key={i} objStyles={styles} />);
    }
    return(
        columnArr
    )
}

export default ShowColumns