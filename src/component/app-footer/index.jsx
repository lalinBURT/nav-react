import React, { memo } from 'react'
import { FooterWrapper } from './style'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      smart-view ©{new Date().getFullYear()} Created by Zhengxin&Tengwei
    </FooterWrapper>
  )
})

export default AppFooter