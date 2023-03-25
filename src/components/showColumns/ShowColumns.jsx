import React from "react";
import Column from '../columnComponent/column'
function ShowColumns(props){
    let columnArr = []
    let currentColor = 'rgba(29, 159, 2, 0.71)'
    for (let i = 0; i < props.numArr.length; i++){
        let columnHeight = `${props.numArr[i] * 20}px`
        if( props.numArr[i] >= 5 &&  props.numArr[i] <= 15){
            currentColor = 'rgba(29, 159, 2, 0.71)'
        }
        else if( props.numArr[i] >= 16 &&  props.numArr[i] <= 23){
            currentColor = 'rgba(246,224,51,0.71)'
        }
        else if( props.numArr[i] >= 24 &&  props.numArr[i] <= 30){
            currentColor = 'rgba(255,152,0,0.71)'
        }
        else{
            currentColor = 'rgba(218,47,54,0.71)'
        }
        const styles = {
            height: columnHeight,
            background: currentColor
        }
        columnArr.push(<Column key={i} objStyles={styles} />)
    }
    return(
        columnArr
    )
}

export default ShowColumns