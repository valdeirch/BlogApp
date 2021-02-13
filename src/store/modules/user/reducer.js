import produce from 'immer';

const INITIAL_STATE = {
  currentUser: null,
};

export default function navbar(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/SET_USER': {
        draft.currentUser = action.payload;
        break;
      }
      default:
    }
  });
}
