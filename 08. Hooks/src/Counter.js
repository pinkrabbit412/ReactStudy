
// #1. useState를 통해 구현하기
/*
import { useEffect, useState } from 'react';

const Counter = () => {
    const [x_value, setXValue] = useState(0);
    const [y_value, setYValue] = useState(0);
    const [point_name, setPointName] = useState("대상 지점");

    const whenPointNameHasChanged = (event) => {
        setPointName(event.target.value);
    }

    useEffect(() => {
        console.log("컴포넌트가 렌더링되었습니다. (" + point_name +", "+ x_value +", "+  y_value + ")");
        // console.log("컴포넌트가 마운트되었습니다.");

        return () => {
            console.log("CleanUp됨.");
        };
        // [!] point_name 값은 모니터링 대상에서 제외함
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [x_value, y_value]);

    return(
        <>
        <div className="componentWrapper">
            <h2>{point_name}의 좌표값 = ({x_value}, {y_value})</h2>
            <hr />
            <input type="text" placeholder="대상 지점의 이름 입력..." onChange={whenPointNameHasChanged}/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setXValue(x_value - 1)}>x - 1</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setXValue(x_value + 1)}>x + 1</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setYValue(y_value - 1)}>y - 1</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setYValue(y_value + 1)}>y + 1</button>
        </div>
        </>
    );
}
*/

// #2. useReducer를 통해 구현하기
const Counter = () => {

}
export default Counter;