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

    /**
     * redux 단독 사용보다는 toolkit 사용을 지향하기 때문에 createStore를 잘 안사용하는것 같긴하네
     */
    const store = createStore(reducer, enhancer);
    return store
}

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development'})

export default wrapper;