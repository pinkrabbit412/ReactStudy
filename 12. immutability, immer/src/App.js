import { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const next_id = useRef(1);
  const [form, setForm] = useState({name: "", country: ""});
  const [user_data, setUserData] = useState({array: [], dummy_value: null});

  const whenInputValueHasChanged = useCallback( (event) => {
    const {name, value} = event.target;
    // 본래의 setForm 코드
    /*
    setForm({
      ...form,
      [name]: [value]
    });
    */
    // immer의 produce를 사용한 setForm 코드
    /*
    setForm( 
      produce( (form), (draft) => {draft[name] = value;} ) 
    );
    */
    // immer와 함수형 업데이트 함께 활용하기
    setForm(
      produce( (draft) => {draft[name] = value} )
    );
  }, []);
  //}, [form]);

  const whenSubmitButtonClicked = useCallback( (event) => {
    event.preventDefault();

    const user_info = {
      id: next_id.current,
      name: form.name,
      country: form.country
    };

    // 본래의 setUserData 코드
    /*
    setUserData({
      ...user_data,
      array: user_data.array.concat(user_info)
    });
    */
    // immer의 produce를 사용한 setUserData 코드
    /*
    setUserData (
      produce( (user_data), (draft) => { draft.array.push(user_info) } )
    );
    */
    // immer와 함수형 업데이트 함께 활용하기
    setUserData(
      produce( (draft) => { draft.array.push(user_info) } )
    );

    setForm({
      name: "",
      country: ""
    });

    next_id.current++;

  }, [form.name, form.country] );
  //}, [user_data, form.name, form.country] );

  const whenRemoveTargetClicked = useCallback( (id) => {
    // 본래의 setUserData 코드
    /*
    setUserData({
      ...user_data,
      array: user_data.array.filter( (info) => (info.id !== id) )
    });
    */
    // immer의 produce를 사용한 setUserData 코드
    /*
    setUserData( produce((user_data), (draft) => {
      draft.array.splice(draft.array.findIndex( (user_info) => (user_info.id === id), 1 ))
    } ) );
    */
    // immer와 함수형 업데이트 함께 활용하기
    setUserData(
      produce( (draft) => { draft.array.splice(draft.array.findIndex( (user_info) => (user_info.id === id) ), 1) } )
    );
  }, [] );
  //}, [user_data] );

  return(
    <>
    <form onSubmit={whenSubmitButtonClicked}>
    <input 
        name="name"
        placeholder="이름 입력"
        value={form.name}
        onChange={whenInputValueHasChanged}
      />
      <input 
        name="country"
        placeholder="국가명 입력"
        value={form.country}
        onChange={whenInputValueHasChanged}
      />
      <button>등록</button>
    </form>
    <br />
    <div>
      <ul style={{color:"white"}}>
        {user_data.array.map( (user_info) =>
          <li key={user_info.id} onClick={ () => whenRemoveTargetClicked(user_info.id) }>
            {user_info.name} ({user_info.country})
          </li>
        )}
      </ul>
    </div>
    </>
  );
}

export default App;