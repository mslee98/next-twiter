import { HYDRATE } from "next-redux-wrapper"

export const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {}
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT'
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            console.log('HYDRATE', action)
            return { ...state, ...action.payload}
        }
        case 'LOG_IN': {
            console.log("???????????")
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }
        }
        case 'LOG_OUT': {
            return {
                ...state,
                user: {
                    ...state,
                    isLoggedIn: false,
                    user: null,
                }
            }
        }
        default : {
            return state
        }
    }
}

export default reducer