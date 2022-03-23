import { nanoid } from "nanoid";
import { AppStateContextProps, AppState, Action, ActionType } from "./types";
import { findItemIndexById } from "../utils/arrayUtils";

export const appStateReducer = (
  state: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case ActionType.ADD_LIST: {
      state.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case ActionType.ADD_TASK: {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);
      state.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    default: {
      break;
    }
  }
};
