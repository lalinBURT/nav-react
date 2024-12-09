import { memo } from 'react'
import { CardBoxWrapper } from './style'
import IconFile from '../../assets/svg/file'
import IconLink from '../../assets/svg/link'
import { Tooltip } from 'antd';

const CardBox = memo(function CardBox() {

    const cardList = [
        {
            id: 1,
            icon: 'https://www.xiejiahe.com/logo.svg',
            title: '谢家和的个人网站。',
            content: '独立开发者，现专注于大前端开发技术，网络安全爱好者，记录、分享与创造。',
            isGood: true,
            iconType: 'icon'
        },{
            id: 2,
            icon: '栖',
            title: '栖木的网络日志',
            content: '一个个人博客，积攒体验的地方',
            isGood: true,
            iconType: 'word'
        },{
            id: 3,
            icon: 'https://www.dolingou.com/favicon.ico',
            title: 'Dolingou',
            content: 'Damn it all to do now.',
            isGood: true,
            iconType: 'icon'
        },{
            id: 4,
            icon: 'Q',
            title: 'Qute',
            content: '一个分享技术和生活的博客',
            isGood: true,
            iconType: 'word'
        },{
            id: 5,
            icon: 'https://blog.ibolee.com/favicon.ico',
            title: '黑李白的博客',
            content: '腰悬长剑，阔步长安。',
            isGood: true,
            iconType: 'icon'
        },{
            id: 6,
            icon: 'https://www.aolifu.org/favicon.ico',
            title: '奥利弗的狗窝 | 时间都去哪了',
            content: '时间都去哪了',
            isGood: true,
            iconType: 'icon'
        },{
            id: 7,
            icon: 'C',
            title: 'CHUIZI - 锤子科技',
            content: '欢迎来到锤子科技，您的IT技术知识分享平台。探索最新的技术趋势、深入的教程和实用的解决方案。我们致力于为技术爱好者和专业人士提供高质量的文章，助您不断提升技能，紧跟科技发展潮流。',
            isGood: true,
            iconType: 'word'
        },{
            id: 8,
            icon: 'https://www.wdssmq.com/zb_users/theme/acgMora/usr/favicon.ico',
            title: '沉冰浮水_置百丈玄冰而崩裂，掷须臾池水而漂摇。',
            content: 'diu 协会成员；不承认但也不拒绝其他任何人自称 「diu 人」；_沉冰浮水_置百丈玄冰而崩裂，掷须臾池水而漂摇。',
            isGood: true,
            iconType: 'icon'
        },{
            id: 9,
            icon: 'http://www.ruanyifeng.com/favicon.ico',
            title: '阮一峰的网络日志',
            content: '阮一峰的网络日志',
            isGood: true,
            iconType: 'icon'
        },{
            id: 10,
            icon: 'https://www.yinwang.org/images/Yc.jpg',
            title: '王垠的博客',
            content: '当然我在扯淡',
            isGood: true,
            iconType: 'icon'
        },{
            id: 11,
            icon: 'https://overreacted.io/icon.png?e0852c1e2c7f0e65',
            title: 'Dan',
            content: 'React作者的博客',
            isGood: true,
            iconType: 'icon'
        }
    ]

  return (
    <CardBoxWrapper>
        {
            cardList.map((item) => {
                return (
                    <div className="card-container" key={item.id}>
                        <div className="card">
                            <div className="top">
                                <div className="icon">
                                    {
                                        item.iconType === 'icon' ? <img src={item.icon} alt="" /> : <div>{item.icon}</div>
                                    }
                                </div>
                                <div className="title">{item.title}</div>
                            </div>
                            <div className="middle">
                                <div className="desc">
                                    {item.content}
                                </div>
                            </div>
                            <div className="bottom">
                                <Tooltip key={item.id} placement="top" title="复制链接" >
                                    <div className="left"><IconFile/></div>
                                </Tooltip>
                                <Tooltip key={item.id} placement="top" title="分享网站" >
                                    <div className="right"><IconLink/></div>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
    </CardBoxWrapper>
  )
})
export default CardBox
