import axios from 'axios';

const initialState = {
  showModal: false
}

const MODAL_SHOW_HIDE = 'MODAL_SHOW_HIDE';

export function modalShowHide() {
  return {
    type: MODAL_SHOW_HIDE
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_SHOW_HIDE:
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
}