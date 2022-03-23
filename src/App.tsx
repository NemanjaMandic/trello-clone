import React from "react";
import { AppContainer } from "./styles";
import AddNewItem from "./AddNewItem";
import Column from "./Column";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} key={list.id} text={list.text} />
      ))}

      <AddNewItem
        onAdd={(text) => dispatch(addList(text))}
        toggleButtonText="Dodaj +"
      />
    </AppContainer>
  );
}

export default App;
