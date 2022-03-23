import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import AddNewItem from "./AddNewItem";
import Card from "./Card";
import { useAppState } from "./state/AppStateContext";
// interface ColumnProps {
//   text: string;
// }

const Column: FC<{ id: string; text: string }> = ({ id, text, children }) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card id={task.id} text={task.text} />
      ))}

      <AddNewItem
        onAdd={(et) => console.log("Added", et)}
        toggleButtonText="+ Add new task"
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
