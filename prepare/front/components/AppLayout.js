import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
    return(
        <>
        <div>공통</div>
        {children}
        </>
    )
}

AppLayout.PropTypes = {
    
    // PropTypes.node는 Node.js 노드를 의미히는것이 아님
    // JSX에서 return 구문에 작성되는 것들을 node(화면을 그리는)라고 표현 함.
    children: PropTypes.node.isRequired
}

export default AppLayout;