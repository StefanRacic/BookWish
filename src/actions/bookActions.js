import { GET_BOOKS, ADD_BOOK, BOOK_ERROR, REVIEW, REMOVE_BOOK } from './types';
import Axios from 'axios';

// Get Users Book
export const getBooks = () => async dispatch => {
  try {
    const res = await Axios.get('/books');
    const books = res.data;
    const getState = localStorage.getItem('state');
    // state.auth.userId
    const state = JSON.parse(getState);
    const returnBooks = [];

    for (let i = 0; i < books.length; i++) {
      if (books[i].userId === state.auth.userId) {
        returnBooks.push(books[i]);
      }
    }

    dispatch({
      type: GET_BOOKS,
      payload: returnBooks
    });
  } catch (error) {
    dispatch({
      type: BOOK_ERROR,
      payload: error.response
    });
  }
};
