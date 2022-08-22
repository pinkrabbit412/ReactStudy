import { useRef, useCallback, useState } from "react";

const App = () => {
  const next_id = useRef(1);
  const [form, setForm] = useState({name: "", country: ""});
  const [user_data, setUserData] = useState({array: [], dummy_value: null});

  const whenInputValueHasChanged = useCallback( (event) => {
    const {name, value} = event.target;
    setForm({
      ...form,
      [name]: [value]
    });
  }, [form]);

  const whenSubmitButtonClicked = useCallback( (event) => {
    event.preventDefault();

    const user_info = {
      id: next_id.current,
      name: form.name,
      country: form.country
    };

    setUserData({
      ...user_data,
      array: user_data.array.concat(user_info)
    });

    setForm({
      name: "",
      country: ""
    });

    next_id.current++;

  }, [user_data, form.name, form.country] );

  const whenRemoveTargetClicked = useCallback( (id) => {
    setUserData({
      ...user_data,
      array: user_data.array.filter( (info) => (info.id !== id) )
    });
  }, [user_data] );

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