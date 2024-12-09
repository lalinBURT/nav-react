import styled from "styled-components";

export const ListWrapper = styled.div`
    width: ${props => props.isCollapse}px;
    height: 100vh;
    border-right: 1px solid #efefef;
    display: block;
    float: left;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    .logo{
        width: 100%;
        height: 70px;
        padding: 10px 10px 10px 15px;
        box-sizing: border-box;
        line-height: 50px;
        img{
            width: 50px;
            height: 50px;
            float: left;
        }
        span{
            width: auto;
            display: block;
            float: left;
            height: 50px;
            margin-left: 10px;
            font-weight: 500;
            font-size: 18px;
            line-height: 50px;
        }
    }
    #menu .ant-menu{
        border: none;
        border-inline-end:none;
        .ant-menu-submenu-title{
            width: 200px;
            height: 44px;
            margin: 4px 0px 4px 0px;
            .ng-star-inserted{
                width: 20px;
                height: 20px;
                margin-right: 12px;
            }
        }
    }
`