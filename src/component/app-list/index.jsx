import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ListWrapper } from './style'
import { Menu } from 'antd';
import { changeSelectedKeyAction, changeLevelKeysAction, changeTopListAction } from '../../store/modules/menu-list';


const AppList = memo(function AppList() {

    const { list, isCollapse, selectedKey } = useSelector((state) => ({
        list: state.menuList.list,
        isCollapse: state.menuList.isCollapse,
        levelKeys: state.menuList.levelKeys,
        selectedKey: state.menuList.selectedKey
      }),shallowEqual)
      console.log(list);
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch(changeLevelKeysAction())
        dispatch(changeSelectedKeyAction(['3']))
        dispatch(changeTopListAction(['31','3']))
      },[dispatch])

    const onOpenChange = (openKeys) => {
        dispatch(changeSelectedKeyAction(openKeys))
    };

    const onClick = ({ keyPath }) => {
        // 获取当前点击项的信息
        dispatch(changeTopListAction(keyPath))
    };

  return (
    <ListWrapper isCollapse={ isCollapse ? 79 : 199 }>
        { !isCollapse && <div className="logo">
          <img className="logo-img" src="https://gcore.jsdelivr.net/gh/xjh22222228/nav-image@image/logo.svg" alt="" />
          <span className="web-title ng-star-inserted">发现导航</span>
        </div>}
        <div id="menu">
            <Menu
                mode="inline"
                defaultSelectedKeys={['3','31']}
                openKeys={isCollapse ? [] : selectedKey}
                onOpenChange={onOpenChange}
                onClick={onClick}
                collapsedWidth={80}
                items={list}
            />
        </div>
    </ListWrapper>
  )
})

export default AppList