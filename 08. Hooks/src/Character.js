import { useReducer, setState } from "react";
import useInput from "./useInput";

function reducer(state, action) {
  switch (action.name) {
    case "level, -1":
      return {
        ...state,
        level: state.level - 1
      }
    case "level, +1":
      return {
        ...state,
        level: state.level + 1
      }
    default:
      break;
  }
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Character = () => {
  /*
  const [state, dispatch] = useReducer(reducer, {
    level: 0,
    nickname: "<닉네임>",
  }); 

  const [state, whenValueHasChanged] = useInput(level: 0, nickname: "<닉네임>");
  const { level, nickname } = state;

  const whenValueHasChanged = (event) => {
    dispatch(event.target);
  }; 

    const whenChangeLevelButtonClicked = (event) => {
    dispatch(event.target);
  }; 커스텀 Hooks 로 대체한 결과는 아래와 같음 */
  const [state, whenValueHasChanged] = useInput({level: 0, nickname: "<닉네임>"});
  const { level, nickname } = state;

  /*
  const whenChangeLevelButtonClicked = (event) => {
    dispatch(event.target);
  }*/

  return (
    <div className="componentWrapper">
      <h2>
        {nickname} {/*(Lv. {level})*/}
      </h2>
      <hr />
      <input
        name="nickname"
        onChange={whenValueHasChanged}
        placeholder="닉네임 입력..."
      />
      {/*
      &nbsp;
      <button
        name="level, -1"
        onClick={whenChangeLevelButtonClicked}
      >
        레벨 -1
      </button>
      &nbsp;
      <button
        name="level, +1"
        onClick={whenChangeLevelButtonClicked}
      >
        레벨 +1
      </button>
      */}
    </div>
  );
};

export default Character;
