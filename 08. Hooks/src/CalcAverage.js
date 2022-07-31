import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const result = numbers.reduce(
    (prev_sum, sum_target) => prev_sum + sum_target
  );
  return result / numbers.length;
};

const CalcAverage = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const value_insert_ref = useRef(null);

  /*
    const whenValueHasChanged = (event) => {
        setNumber(event.target.value);
    }; */
  const whenValueHasChanged = useCallback((event) => {
    setNumber(event.target.value);
  }, []);

  /*
  const whenValueInsertButtonClicked = (event) => {
    const nextNumber = parseInt(number);
    if (isNaN(nextNumber)) {
      alert("입력값의 맨 앞부분이 정수 값이 아닙니다.\n다시 입력해주세요.");
      setNumber("");
      return;
    }
    const nextList = list.concat(nextNumber);
    setList(nextList);
    setNumber("");
  }; */
  const whenValueInsertButtonClicked = useCallback( (event) =>
  {
    const nextNumber = parseInt(number);
    if (isNaN(nextNumber)) {
      alert("입력값의 맨 앞부분이 정수 값이 아닙니다.\n다시 입력해주세요.");
      setNumber("");
      value_insert_ref.current.focus();
      return;
    }
    const nextList = list.concat(nextNumber);
    setList(nextList);
    setNumber("");
    value_insert_ref.current.focus();
  }, 
  [number, list]);
  const average_value = useMemo(() => getAverage(list), [list]);

  return (
    <div className="componentWrapper">
      <input
        value={number}
        onChange={whenValueHasChanged}
        ref={value_insert_ref}
        placeholder="목록에 추가할 숫자 입력..."
      />
      &nbsp;
      <button
        style={{ marginRight: "5rem" }}
        onClick={whenValueInsertButtonClicked}
      >
        추가
      </button>
      &nbsp; 평균값: <b>{average_value}</b>
      <hr />
      <ul style={{ textAlign: "left" }}>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalcAverage;
