/**
 * _app.js 는 Pages들이 공통으로 사용되는 것들을 처리
 * Layout은 일부 공통이라고 생각하면 될 듯?
 */
import React from 'react';

/**
 * css는 원래 import할 수 없다. Next는 Webpack이 내장되어 있는데 Webpack css문서를 읽으면 css를 스타일 태그로 변경해
 * Html에 넣어준다.
 */
import 'antd/dist/antd.css'; //ant-design 5버전 이상부터는 import필요 없어 보임
import PropTypes  from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const NodeBird = ({ Component}) => {
    return (
        <>
            <Head>
                {/* Next에서 <Head></Head> 태그를 수정하려면 nest/head로 부터 컴포넌트 받아서 변경 */}
                <meta charSet="utf-8"/>
                <title>mslee</title>
            </Head>
            <Component/>
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);