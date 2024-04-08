import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import PropTypes from 'prop-types';

/**
 * Ant-design Cards
 * action 버튼
 * 
 * 
 */
const UserProfile = ({setIsLoggedIn}) => {

    const onLogout = useCallback(() => {
        setIsLoggedIn(false)
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

UserProfile.PropTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}


export default UserProfile;