import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../Lists/List";

const LS_TODO_KEY = "todo";
const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const btnclickHandler = () => {
    // const items= [...list];
    // items.push(item);
    // setList(items);
    if (item.trim().length) {
      setList([
        ...list,
        { item, editingItem: item, isDone: false, isEditing: false },
      ]);
      setItem("");
    }
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LS_TODO_KEY)) || [];
    setList(items);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(list));
  }, [list]);

  const swapItem = (initialIndex, finalIndex) => {
    const items = [...list];
    const temp = items[initialIndex];
    items[initialIndex] = items[finalIndex];
    items[finalIndex] = temp;
    setList(items);
  };

  const doneBtnHandler = (index) => {
    const items = [...list];
    items[index].isDone = true;
    setList(items);
  };

  const deletebtnHandler = (index) => {
    const items = [...list];
    items.splice(index, 1);
    setList(items);
  };

  const editbtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = true;
    setList(items);
  };
  const cancelbtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].editingItem = items[index].item;
    setList(items);
  };

  const changeInputeditHandler = (index, data) => {
    const items = [...list];
    items[index].editingItem = data;
    setList(items);
  };

  const savebtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].item = items[index].editingItem;
    setList(items);
  };

  return (
    <>
      <Input
        changeHandler={(data) => setItem(data)}
        value={item}
        enterkeyHandler={btnclickHandler}
      />
      <Button
        clickHandler={btnclickHandler}
        disabled={!item.trim().length}
        btnLabel="Add to the List"
      />
      <Button btnLabel="Clear All" clickHandler={()=>setList([])} disabled={!list.length}/>
      <div className="mt-3">
        <List
          items={list}
          swapItem={swapItem}
          doneBtnHandler={doneBtnHandler}
          deletebtnHandler={deletebtnHandler}
          editbtnHandler={editbtnHandler}
          cancelbtnHandler={cancelbtnHandler}
          changeInputeditHandler={changeInputeditHandler}
          savebtnHandler={savebtnHandler}
        />
      </div>
    </>
  );
};

export default Todo;
