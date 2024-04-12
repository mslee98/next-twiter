
/**
 * HYDRATE는 SSR을 위해서 사용한다고 함.
 */
import { HYDRATE } from "next-redux-wrapper"
import user from './user'
import post from './user'
import { combineReducers } from "redux"

export const initialState = {
    user: {
    },
    post: {
    }
}

/**
 * combineReducers는 reducer들을 합쳐주는 메서드
 */
const reducer = combineReducers({

    // 메인 리듀서
    index: (state = {}, action) => {
        switch(action.type) {
            case HYDRATE:
                return { ...state, ...action.payload }
            default: 
                return state
        }
    },
    user,
    post,

})


export default reducer