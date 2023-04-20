
import { ThunkAction } from 'redux-thunk';
import { types } from './types'
import { Action } from 'redux';
export const fetchPosts = (): ThunkAction<Promise<void>, any, unknown, Action<string>> => async (dispatch:any) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({ type: types.GET_POSTS, payload: data }))
      .catch(err => console.log(err));
  };
