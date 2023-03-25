import './MainPage.scss';
import { useState } from 'react';
import ShowColumns from "../../components/showColumns/ShowColumns";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function MainPage() {
    const [numbers, setNumbers] = useState(() => generateRandomArray(170,5,40)); // початкове значення масиву
    const [currentColumn, setCurrentColumn] = useState(null);

    function regenerate(){
        setNumbers(generateRandomArray(170,5,40))
    }
    function clickToSort(){
        bubbleSort()
        bubbleSort()
        bubbleSort()
        bubbleSort()
        bubbleSort()
        bubbleSort()
        bubbleSort()
    }
    async function bubbleSort() {
        let temp_arr = [...numbers]; // створюємо копію масиву
        for(let i = 0; i < temp_arr.length; i++){
            for(let j = 0; j < temp_arr.length - 1; j++){
                if(temp_arr[j] > temp_arr[j+1]){
                    await sleep(1)
                    await swap(temp_arr, j, j+1);
                    setNumbers(temp_arr); // оновлюємо стан компонента після завершення сортування
                }
            }
        }
    }

    async function swap(array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    return (
        <div><div className="MainPage">
            <ShowColumns numArr={numbers}/>
        </div>
            <div className="controlPanel">
                <button className='sortButton' onClick={clickToSort}>Sort</button>
            </div>
        </div>

    )
}

export default MainPage;

