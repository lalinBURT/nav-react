import {  memo } from 'react'
import PropTypes from 'prop-types'
import { BodyWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const AppBody = memo(function AppBody(props){

    const { isCollapse } = useSelector((state) => ({
        isCollapse: state.menuList.isCollapse
      }),shallowEqual)

    return (
        <BodyWrapper isCollapse={isCollapse ? 80 : 260}>
            {props.children}
        </BodyWrapper>
    )
})

AppBody.propTypes = {
    children: PropTypes.node
}
export default AppBody
