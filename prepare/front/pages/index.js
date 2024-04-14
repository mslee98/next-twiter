import React from 'react';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
/**
 * Next.js는 return (<div>Test</div>)와 같은 JSX 문법을 사용할 때 React를 import하지 않아도 된다.
 * 
 */
const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post)

    return (
        <AppLayout>
            {isLoggedIn ? <PostForm/> : <div>헤헿</div>}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    )
}

export default Home;