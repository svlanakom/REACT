import { ADDUSER, DELETEUSER } from "./users.actions";

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };

    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter((elem) => elem.id !== action.payload),
      };

    default:
      return state;
  }
};
