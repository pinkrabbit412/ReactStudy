import { useState } from "react";

const MapListExample = () => {
  // const items = ["Vaseline", "Ibuprofen", "Golden Star", "Morphine"];
  // const item_list = items.map((value, index) => <li key={index}>{value}</li>);
  const [items, setItem] = useState([
    { id: 1, name: "Vaseline" },
    { id: 2, name: "Ibuprofen" },
    { id: 3, name: "Golden Star" },
    { id: 4, name: "Morphine" },
    { id: 5, name: "Propital" },
  ]);
  const [new_item_id, setNextItemID] = useState(6);
  const [new_item_name, addNewItemName] = useState("");

  const whenInputValueChanged = (event) => {
    addNewItemName(event.target.value);
  };
  const whenAddButtonClicked = () => {
    const nextItem = items.concat({ id: new_item_id, name: new_item_name });
    setNextItemID(new_item_id + 1);
    setItem(nextItem);
    addNewItemName("");
  };
  const clickToRemoveItems = (id) => {
    const nextItem = items.filter((items) => items.id !== id);
    setItem(nextItem);
  };

  const item_list = items.map((items) => <li key={items.id} onDoubleClick={()=>{clickToRemoveItems(items.id)}}>{items.name}</li>);
  return (
    <>
      <input
        value={new_item_name}
        onChange={whenInputValueChanged}
        placeholder="새 아이템 이름 입력"
      />
      &nbsp;
      <button onClick={whenAddButtonClicked}>추가</button>
      <ul>{item_list}</ul>
    </>
  );
};

export default MapListExample;
