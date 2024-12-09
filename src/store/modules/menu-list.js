import { createSlice } from "@reduxjs/toolkit";
import Blog from "../../assets/svg/blog";
// import Tool from "../../assets/svg/tool";
// import Computer from "../../assets/svg/computer";
// import Blog from "../../assets/svg/blog";

const menuListSlice = createSlice({
    name: "menuList",
    initialState: {
        isCollapse: false,
        selectedKey: [],
        levelKeys: [],
        topList: {
          selectedItem: {},
          list: []
        },
        list: [
            {
              key: '1',
              label: '实用工具',
              children: [
                {
                  key: '11',
                  label: '开发相关',
                },
                {
                  key: '12',
                  label: '设计相关',
                },
                {
                  key: '13',
                  label: 'GUI软件',
                },
                {
                  key: '14',
                  label: '影视/音乐',
                },
                {
                  key: '15',
                  label: '招聘/求职',
                },
                {
                  key: '16',
                  label: 'GPT',
                },
                {
                  key: '17',
                  label: 'WEB3',
                },
                {
                  key: '18',
                  label: '优秀工具',
                }
              ],
            },
            {
              key: '2',
              label: '优质网站',
              children: [
                {
                  key: '21',
                  label: '摸鱼网站',
                },
                {
                  key: '22',
                  label: '社区站点',
                },
                {
                  key: '23',
                  label: '搜索引擎'
                },
                {
                  key: '24',
                  label: '游戏推荐'
                },
                {
                  key: '25',
                  label: '在线内容'
                },
                {
                  key: '26',
                  label: '精选导航'
                }
              ],
            },
            {
              key: '3',
              icon: <Blog />,
              label: '博客看点',
              children: [
                {
                  key: '31',
                  label: '博客看点',
                }
              ],
            }
        ]
    },
    reducers: {
        changeSelectedKeyAction(state,{ payload = [] }){ 
          const stateOpenKeys = state.selectedKey
          const levelKeys = state.levelKeys
          const currentOpenKey = payload.find((key) => stateOpenKeys.indexOf(key) === -1);
          // open
          if (currentOpenKey !== undefined) {
          const repeatIndex = payload
              .filter((key) => key !== currentOpenKey)
              .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
          state.selectedKey = 
            payload
              // remove repeat key
              .filter((_, index) => index !== repeatIndex)
              // remove current level all child
              .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
          } else {
            // close
            state.selectedKey = payload
          }
        },
        changeTopListAction(state, { payload }){
          let res_arr = []
          let analysisArr = state.list
          for(let i=payload.length - 1;i>=0;i--){
            const newAnalysisObj = analysisArr.find((item) => {
             return item.key === payload[i]
            })
            if(i === 0){
              state.topList.selectedItem = newAnalysisObj 
            }else{
              analysisArr = newAnalysisObj.children
              res_arr.push(newAnalysisObj)
            }
          }
          state.topList.list = res_arr
        },
        changeLevelKeysAction(state){
          const key = {};
          const func = (items2, level = 1) => {
            items2.forEach((item) => {
              if (item.key) {
                key[item.key] = level;
              }
              if (item.children) {
                func(item.children, level + 1);
              }
            });
          };
          func(state.list);
          state.levelKeys = key
        },
        changeIsCollapseAction(state, { payload }){
            state.isCollapse = payload
        }
    },
    extraReducers: () => {
    }
})
export const {
    changeSelectedKeyAction,
    changeIsCollapseAction,
    changeLevelKeysAction,
    changeTopListAction
} = menuListSlice.actions
export default menuListSlice.reducer