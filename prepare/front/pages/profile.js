import React from 'react'
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    const followerList = [{nickname: 'aaa'}, {nickname: 'bbb'}, {nickname: 'ccc'}];
    const followingList = [{nickname: 'ddd'}, {nickname: 'eee'}, {nickname: 'fff'}];

    return (
        <>
            <Head>
                <title>my Profile | mslee</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    )
}

export default Profile;