import { memo, useMemo, useState } from 'react'
import { MyAppWrapper } from './style'
import { Tooltip } from 'antd';

const MyApp = memo(function MyApp() {

    const myAppList = [
        {
            id: 1,
            name: '我的主页',
            url: 'https://www.baidu.com',
            icon: 'https://gcore.jsdelivr.net/gh/xjh22222228/nav-image@image/nav-1727266765855-主页.svg',
            hover: '我的主页'
        },{
            id: 2,
            name: 'Tomato Work',
            url: 'https://www.baidu.com',
            icon: 'https://work.xiejiahe.com/logo.svg',
            hover: "个人事务管理系统"
        },{
            id: 3,
            name: '谢家和的个人网站',
            url: 'https://www.baidu.com',
            icon: 'https://www.xiejiahe.com/logo.svg',
            hover: "独立开发者，现专注于大前端开发技术，网络安全爱好者，记录、分享与创造。"
        },{
            id: 4,
            name: 'XSS测试',
            url: 'https://www.baidu.com',
            icon: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/xss/favicon.png',
            hover: "XSS-CTF 是一个练习和入门的XSS平台"
        },{
            id: 5,
            name: 'Boomb',
            url: 'https://www.baidu.com',
            icon: 'https://boomb.cn/favicon.png',
            hover: "基于 Github 轻松管理您的存储图库"
        },{
            id: 6,
            name: 'xjh22222228 (xiejiahe) · GitHub',
            url: 'https://www.baidu.com',
            icon: 'https://github.githubassets.com/favicons/favicon.svg',
            hover: "🥜 JavaScript / Golang. xjh22222228 has 33 repositories available. Follow their code on GitHub."
        },{
            id: 7,
            name: 'Beautiful window',
            url: 'https://www.baidu.com',
            icon: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/beautiful-window/logo.svg',
            hover: "Create your beautiful window online"
        },{
            id: 8,
            name: '发现导航 - 轻量级导航网站',
            url: 'https://www.baidu.com',
            icon: 'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/logo2.svg',
            hover: "发现导航是一个轻量级免费且强大的导航网站"
        }
    ]
    const [arrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
        return false;
        }
        if (arrow === 'Show') {
        return true;
        }
        return {
        pointAtCenter: true,
        };
    }, [arrow]);

  return (
    <MyAppWrapper>
        {
            myAppList.map((item) => {
                let title = (
                    <span>
                        {item.name}
                        <br />
                        {item.hover}
                    </span>
                )
                return (
                    <Tooltip key={item.id} placement="bottom" title={title} arrow={mergedArrow}>
                        <a href={item.url} className="link">
                            <img src={item.icon} alt="" />
                            <span>{item.name}</span>
                        </a>
                    </Tooltip>
                )
            })
        }
    </MyAppWrapper>
  )
})
export default MyApp