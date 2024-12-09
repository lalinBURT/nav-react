import styled from "styled-components";

export const CountdownBoxWrapper = styled.div`
    width: 320px;
    height: 155px;
    /* box-sizing: border-box; */
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 15px #0003;
    color: #666;
    margin-right: 15px;
    flex-shrink: 0;
    .left{
        width: 140px;
        height: 155px;
        padding:12px 0px 12px 12px;
        box-sizing: border-box;
        float: left;
        h2{
            font-weight: 500;
            font-size: 16px;
            margin: 0px;
            height: 24px;
        }
        .countdown{
            font-size: 46px;
            text-align: center;
            font-weight: 700;
            height: 86px;
            line-height: 86px;
            color: #000000d9;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .date{
            text-align:center;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }
    }
    .right{
        float: left;
        padding: 12px;
        padding-top: 10px;
        font-size: 14px;
        width: 180px;
        height: 155px;
        box-sizing: border-box;
        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 0px;
            color: #000c;
            margin-bottom: 3px;
            border-bottom: 1px solid #eee;
            width: 156px;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            position: relative;
            .rest{
                background-color: #dffcea;
                color: #55aa6f;
                height: 18px;
                line-height: 14px;
                font-size: 10px;
                font-weight: 500;
                padding: 1px 2px;
                border-radius: 2px;
                margin-right: 3px;
                margin-left: 2px;
                position: absolute;
                left: -20px;
                box-sizing: border-box;
            }
        }
    }
`
