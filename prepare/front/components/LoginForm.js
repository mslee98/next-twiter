import React, { useCallback } from 'react';
import { Button, Input, Form } from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { loginAction } from '../reducers/user';
import { useDispatch } from 'react-redux'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: '10px';
`;

const LoginForm = () => {
    const dispatch = useDispatch()

    const [id, onChangeId] = useInput('');    
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        /**
         * And-design에서 Form onFinish는 이미 event.preventDefault가 적용이 되어 있음
         */

        console.log(id, password)
        dispatch(loginAction({id, password}))
        // setIsLoggedIn(true)

    }, [id, password])

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

/**
 * style={{ padding: '10px' }} 이런식으로 스타일 객체를 넣으면 안 됨
 * 이거 때문에 버츄얼 돔이 인식해서 리랜더링되기 때문에 스타일드 컴포넌트같은거 사용
 * 성능적으로 크게 문제가 없다면 상관은 없으니 너무 집축하지 않아도 됨
 */

export default LoginForm;