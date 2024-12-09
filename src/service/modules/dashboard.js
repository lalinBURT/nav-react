import hyRequest from "../request";

//高性价比
export function getDashBoardInfoAction(){
    return hyRequest.get({
        url: "/home/goodprice"
    })
}