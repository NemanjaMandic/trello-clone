import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import AddNewItem from "./AddNewItem";

// interface ColumnProps {
//   text: string;
// }

const Column: FC<{ text: string }> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        onAdd={(et) => console.log("Added", et)}
        toggleButtonText="+ Add new task"
      />
    </ColumnContainer>
  );
};

export default Column;
