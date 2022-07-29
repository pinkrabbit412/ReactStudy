import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Character = () => {
  const [state, dispatch] = useReducer(reducer, { level: 0, nickname: "<닉네임>" });
  const {level, nickname} = state;

  const whenValueHasChanged = (event) => {
    dispatch(event.target);
  };

  return (
    <div className="componentWrapper">
      <h2>
        {nickname} (Lv. {level})
      </h2>
      <hr />
      <input
        name="nickname"
        onChange={whenValueHasChanged}
        placeholder="닉네임 입력..."
      />
      &nbsp;
      <button onClick={}>레벨 -1</button>
      &nbsp;
      <button onClick={}>레벨 +1</button>
    </div>
  );
};

export default Character;
