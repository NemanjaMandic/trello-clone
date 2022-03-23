import { Dispatch } from "react";

export enum ActionType {
  ADD_TASK = "ADD_TASK",
  ADD_LIST = "ADD_LIST",
}
export type Action =
  | { type: ActionType.ADD_LIST; payload: string }
  | { type: ActionType.ADD_TASK; payload: { text: string; listId: string } };

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

export interface AppStateContextProps {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
}
