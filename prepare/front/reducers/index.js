
/**
 * HYDRATE는 SSR을 위해서 사용한다고 함.
 */
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux"

import user from './user'
import post from './post'

/**
 * combineReducers는 reducer들을 합쳐주는 메서드
 */
const rootReducer = combineReducers({
    index: (state = {}, action) => {
      switch (action.type) {
        case HYDRATE:
          console.log('HYDRATE', action);
          return { ...state, ...action.payload };
        default:
          return state;
      }
    },
    user,
    post,
  });

export default rootReducer;