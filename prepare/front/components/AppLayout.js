import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;

`

/**
 * Next에서는 React-router를 사용하지 않음
 * 자체적으로 라우팅을 제공한다.
 * 
 * 현재 9버전에서는 <Link><a>내용</a></Link> 이런식으로 <Link>태그 내부에 <a>태그를 사용하는데
 * 13버전 이후부터는 <a></a>를 직접적으로 넣지 못한다. 사용하려면 legacyBehavior를 사용해야한다.
 * 예시) <Link href="/" legacyBehabior><a className="...code"></a></Link>
 */
import Link from 'next/link';
import LoginForm from '../components/LoginForm.js';
import UserProfile from '../components/UserProfile.js';

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href={"/"}><a>home</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href={"/profile"}><a>profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                    {/* <Input.Search onKeyDown={onChangeEvt}><a>{search}</a></Input.Search> */}
                </Menu.Item>
                <Menu.Item>
                    <Link href={"/signup"}><a>signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>{/** 컬럼 사이에 간격 gutter */}
                <Col xs={24} md={6} >
                    {isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6} >
                    <a href="https://github.com/mslee98" target='_blank' rel='noreferrer noopener'>Made By Mslee</a>
                </Col>
            </Row>    
        </>
    )
};

AppLayout.propTypes  = {
    children: PropTypes.node.isRequired
    // PropTypes.node는 Node.js 노드를 의미히는것이 아님
    // JSX에서 return 구문에 작성되는 것들을 node(화면을 그리는)라고 표현 함.
    };

export default AppLayout;