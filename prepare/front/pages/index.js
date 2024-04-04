import React from 'react';
import AppLayout from '../components/AppLayout';
/**
 * Next.js는 return (<div>Test</div>)와 같은 JSX 문법을 사용할 때 React를 import하지 않아도 된다.
 * 
 */
const Home = () => {
    return (
        <AppLayout>
            <div>Hello</div>
        </AppLayout>
    )
}

export default Home;