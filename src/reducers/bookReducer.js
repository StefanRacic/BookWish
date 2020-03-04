import { GET_BOOKS, BOOK_ERROR, ADD_BOOK, REMOVE_BOOK } from '../actions/types';
const initialState = {
  books: [],
  current: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};
