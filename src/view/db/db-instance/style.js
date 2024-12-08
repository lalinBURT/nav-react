import styled from "styled-components";

export const DBInstanceWrapper = styled.div`
    padding: 18px 72px;
    /* padding-bottom: 0px; */
    .MuiPaper-root {
        /* padding: 9px 9px 0px 9px;
        padding-bottom: 0px; */
        /* border-bottom: 1px solid #efefef; */
        /* border-bottom-left-radius: 0%;
        border-bottom-right-radius: 0%; */
        border-bottom: none;
    }
    .MuiDataGrid-root{
        border-top-left-radius: 0%;
        border-top-right-radius: 0%;
        border-radius: initial  !important;
    }
    .table-header{
        display: flex;
        justify-content: space-between;
        padding: 0px 9px;
        min-height: 56px;
        line-height: 56px;
        /* flex-direction: column; */
        margin-bottom: -1px;
        padding: 0 24px;
        color: rgba(0, 0, 0, 0.88);
        font-weight: 600;
        font-size: 16px;
        background: transparent;
    }
`