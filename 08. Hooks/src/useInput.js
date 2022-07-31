import { useReducer } from "react";

function reducer(state, action) {
    return({
        ...state,
        [action.name]: action.value
    });
}

export default function useInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const whenValueChanges = (event) => {
        dispatch(event.target);
    };

    return [state, whenValueChanges];
}