import React, { memo } from 'react'
import { AppContentWrapper } from './style'
import { Collapse } from 'antd';
import CardBox from '../../base-ui/card-box';

export default memo(function AppContent() {

    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;
    const items = [
        {
            key: '1',
            label: '个人博客 X 11',
            children: <CardBox />,
        },
        {
            key: '2',
            label: 'Team X 6',
            children: <p>{text}</p>,
        }
    ];

  return (
    <AppContentWrapper>
        <Collapse defaultActiveKey={['1']} ghost items={items} />
    </AppContentWrapper>
  )
})
