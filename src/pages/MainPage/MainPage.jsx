import './MainPage.scss';
import ShowColumns from "../../components/showColumns/ShowColumns";

function generateRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

let numArr = generateRandomArray(200, 5, 40)
function MainPage() {
    return (
        <div className="MainPage">
            <ShowColumns numArr={numArr}/>
        </div>
    )
}

export default MainPage;

