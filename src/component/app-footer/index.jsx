import  { memo } from 'react'
import { FooterWrapper } from './style'

const AppFooter = memo(function AppFooter() {
  return (
    <FooterWrapper>
      smart-view ©{new Date().getFullYear()} Created by Zhengxin&Tengwei
    </FooterWrapper>
  )
})

export default AppFooter