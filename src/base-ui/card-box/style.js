import styled from "styled-components";

export const CardBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* padding: 0px 20px ; */
    margin: -9px;
    .card-container {
        /* padding-right: 16px;
        padding-bottom: 16px; */
        padding: 9px;
        transition: all .2s ease-out;
        /* background-color: #fff; */
        width: 25%;
        min-height: 100px;
        min-width: 242px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            transform: translateY(-2px);
        }
        .card{
            width: 100%;
            background-color: #fff;
            box-shadow: 0 1px 5px #0000001a;
            border-radius: 4px;
            border: 1px solid #eee;
            .top{
                width: 100%;
                height: 43px;
                box-sizing: border-box;
                margin-top: 10px;
                padding: 0px 8px;
                display: flex;
                align-items: center;
                .icon{
                    width: 35px;
                    height: 35px;
                    float: left;
                    img{
                        border-radius: 3px;
                        width: 35px;
                        height: 35px;
                        min-height: 35px;
                        min-width: 35px;
                    }
                    div{
                        border-radius: 50%;
                        background-color: #1890ff;
                        width: 35px;
                        height: 35px;
                        min-height: 35px;
                        min-width: 35px;
                        color: #fff;
                        line-height: 35px;
                        text-align: center;
                        font-size: 18px;
                    }
                }
                .title{
                    margin-left: 8px;
                    font-weight: 500;
                    font-size: 15px; 
                    white-space: normal;
                    word-break: break-all;
                    color: #000c;
                    float: left;
                    /* line-height: 35px; */
                }
            }
            .middle{
                width: 100%;
                height: 62px;
                padding: 0px 8px 0px 8px;
                box-sizing: border-box;
                background-color: #fff;
                .desc{
                    padding-bottom: 5px;
                    font-size: 13px;
                    height: 63.5px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-height: 245px;
                    box-sizing: border-box;
                    color: #00000080;
                    word-break: break-all;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
            }   
            .bottom{
                height: 16px;
                padding: 8px;
                border-top: 1px solid #eee;
                margin-top: 10px;
                /* box-sizing: border-box; */
                background-color: #fff;
                color: #999;
                font-size: 16px;
                line-height: 16px;
                .left{
                    float: left;
                    height: 16px;
                    width: 50%;
                    border-right: 1px solid #eee;
                    box-sizing: border-box;
                    text-align: center;
                    svg{
                        margin-top: -2px;
                    }
                }
                .right{
                    float: left;
                    height: 16px;
                    width: 50%;
                    text-align: center;
                    svg{
                        margin-top: -2px;
                    }
                }
            }
        }
    }
`