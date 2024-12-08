import React, { memo } from 'react'
import { BodyWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const AppBody = memo((props) => {

    const { isCollapse } = useSelector((state) => ({
        isCollapse: state.menuList.isCollapse
      }),shallowEqual)

    return (
        <BodyWrapper isCollapse={isCollapse ? 80 : 260}>
            {props.children}
        </BodyWrapper>
    )
})

export default AppBody