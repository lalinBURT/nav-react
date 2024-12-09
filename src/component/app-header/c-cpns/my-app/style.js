import styled from "styled-components";

export const MyAppWrapper = styled.div`
    --antd-wave-shadow-color: #1890ff;
    --scroll-bar: 0;
    tab-size: 4;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    --componentHeight: 155px;
    color: #000000d9;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-variant: tabular-nums;
    font-feature-settings: "tnum";
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    box-sizing: border-box;
    margin-top: 28px;
    margin-bottom: 15px;
    margin-left: 20px;
    display: flex;
    padding: 0 10px;
    flex-wrap: wrap;
    gap: 25px;
    .link{
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #666;
        transition: margin ease-in-out 0.2s;
        img{
            width: 35px;
            height: 35px;
        }
        span{
            width: 61px;
            margin-top: 5px;
            height: 21px;
            line-height: 21px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
        }
    }
    .link:hover{
        margin-top: -5px;
    }
`