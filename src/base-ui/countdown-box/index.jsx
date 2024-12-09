import { memo } from 'react'
import { CountdownBoxWrapper } from './style'

const CountDownBox = memo(function CountDownBox() {
  return (
    <CountdownBoxWrapper>
        <div className="left">
            <h2>距离平安夜</h2>
            <span className="countdown">22</span>
            <span className="date">12.24</span>
        </div>
        <div className="right">
            <div className="item">
                <div className="item-left">平安夜&nbsp;12.24</div>
                <div className="item-right">22天</div>
            </div>
            <div className="item">
                <div className="item-left">圣诞节&nbsp;12.25</div>
                <div className="item-right">23天</div>
            </div>
            <div className="item">
                <div className="rest">休</div>
                <div className="item-left">元旦节&nbsp;01.01</div>
                <div className="item-right">30天</div>
            </div>
            <div className="item">
                <div className="rest">休</div>
                <div className="item-left">春节&nbsp;01.29</div>
                <div className="item-right">58天</div>
            </div>
        </div>
    </CountdownBoxWrapper>
  )
})
export default CountDownBox