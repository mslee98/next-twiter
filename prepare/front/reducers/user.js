export const initialState = {
 isLoggedIn: false,
 user: null,
 signUpData: {},
 loginData: {},
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

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOG_IN': {
            console.log('reducerData : ', action.data)
            return {
                ...state,
                isLoggedIn: true,
                user: action.data
            }
        }
        case 'LOG_OUT': {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        default: state
    }
}

export default reducer;