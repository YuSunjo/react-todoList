import React from 'react';

const Template= ({children}) => {
    return (
        <div className="Template">
            <div className="title">오늘의 할 일</div>
            <div>할일이 여기에 들어갑니다. </div>
    <div>{children}</div>
        </div>
    )
}

export default Template;