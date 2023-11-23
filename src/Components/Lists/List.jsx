import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./List.module.css";
// eslint-disable-next-line react/prop-types
const List = ({ items, swapItem, doneBtnHandler, deletebtnHandler, editbtnHandler, cancelbtnHandler, changeInputeditHandler, savebtnHandler,
}) => {
  // eslint-disable-next-line react/prop-types
  const listItems = items.map((task, index) => (
    <li key={index} className={task.isDone ? `p-2 ${styles.listitem}` : "p-2"}>
      {!task.isEditing && (
        <>
          {" "}
          {task.item}
          <Button
            btnLabel="Edit"
            btnClassName="ms-2"
            disabled={task.isDone}
            clickHandler={() => editbtnHandler(index)}
          />
        </>
      )}
      {task.isEditing && (
        <>
          <Input
            value={task.editingItem}
            changeHandler={(data) => changeInputeditHandler(index, data)}
          />
          <Button
            btnLabel="save"
            btnClassName="ms-2"
            clickHandler={() => savebtnHandler(index)}
            disabled={!task.editingItem.trim().length}
          />
          <Button
            btnLabel="Cancel"
            btnClassName="ms-2"
            clickHandler={() => cancelbtnHandler(index)}
          />
        </>
      )}

      <Button
        btnLabel="up"
        btnClassName="me-2 ms-2"
        clickHandler={() => swapItem(index, index - 1)}
        disabled={index === 0}
      />
      <Button
        btnLabel="Down"
        // btnStyle={{backgroundColor:'pink'}}
        btnClassName="me-2"
        clickHandler={() => swapItem(index, index + 1)}
        disabled={index === items.length - 1}
      />

      {/* { task.isDone ? (
      <Button btnLabel='Done'
       btnClassName='me-2' />
     ):(
      <Button btnLabel='Delete'
       btnClassName='me-2 ' />
     )} */}

      {task.isDone && (
        <Button
          btnLabel="Delete"
          btnClassName="me-2"
          clickHandler={() => deletebtnHandler(index)}
        />
      )}

      {!task.isDone && (
        <Button
          btnLabel="Done"
          btnClassName="me-2 "
          clickHandler={() => doneBtnHandler(index)}
          disabled={task.isEditing}
        />
      )}
    </li>
  ));
  return <ul className={styles.list}>{listItems}</ul>;
};

export default List;
