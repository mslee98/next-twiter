import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

/**
 * Ant-design Cards
 * action 버튼
 * 
 * 
 */
const UserProfile = () => {
    const dispatch = useDispatch();


    const onLogout = useCallback(() => {
        //setIsLoggedIn(false)

        dispatch(logoutAction())
    }, [])

    return (
        <Card
            actions={[
                <div key='twit'>트윗수<br/>0</div>,
                <div key='followings'>팔로잉<br/>0</div>,
                <div key='tiwt'>팔로워<br/>0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar></Avatar>}
                title="mslee"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;