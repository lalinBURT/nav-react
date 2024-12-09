import { memo } from 'react'
import { HeaderWrapper } from './style'
import { Carousel } from 'antd';
import CountdownBox from '../../base-ui/countdown-box';
import SelectInput from '../../base-ui/select-input';
import MyApp from './c-cpns/my-app';

const bannerImages = [
  'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/banner1.jpg',
  'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/banner2.jpg',
  'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/banner3.jpg',
  'https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/banner4.jpg'
]

const AppHeader = memo(function AppHeader() {

  return (
    <HeaderWrapper>
      <div className="carousel">
        <Carousel autoplay>
          {
            bannerImages.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className="calendar">
        <CountdownBox/>
        <CountdownBox/>
        <CountdownBox/>
        <CountdownBox/>
      </div>
      <div className="serch-box">
          <SelectInput/>
      </div>
      <div className="my-app">
          <MyApp/>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader

