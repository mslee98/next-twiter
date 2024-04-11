import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import reducer from '../reducers';

const configureStore = () => {
    const middlewares = []; // saga나 Trunk 이런 것들을 넣음

    // enhancer는 미들웨어를 처리하기 위함
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, enhancer);
    return store
}

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development'})

export default wrapper;