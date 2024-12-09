import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    /* height: 552px; */
    /* background-color: #f5f5f5; */
    /* box-sizing: border-box; */;
    display: inline-block;
    .carousel{
        width: 100%;
        /* height: 30vw; */
        box-sizing: border-box;
        /* display: flex; */
        .slick-track{
            height: 100%
            h3{
                margin: 0 !important;
            }
        }
        div img{
            width: 100%;
            height: 100%;
        }
    }
    .calendar {
        /* width: 100vw; */
        height: 175px;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        overflow: auto;
        scrollbar-gutter: stable;
        
    }
    .serch-box {
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
        position: relative;
        display: flex;
        justify-content: center;
        padding: 10px 0;
    }
    .my-app{
        
    }
`