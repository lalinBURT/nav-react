import { memo } from 'react'
import { SelectInputWrapper } from './style'
import { Input, Select, Space } from 'antd';

const SelectInput = memo(function SelectInput() {

    const options = [
        {
          value: 'synthesis',
          label: '综合',
        },
        {
          value: 'title',
          label: '标题',
        },
        {
          value: 'description',
          label: '描述',
        },
        {
          value: 'link',
          label: '链接',
        },
        {
          value: 'current',
          label: '当前',
        },
        {
          value: 'shortcut',
          label: '快捷',
        }
      ];

  return (
    <SelectInputWrapper>
        <Space.Compact>
            <Select defaultValue="synthesis" options={options} />
            <Input placeholder='站内搜索'/>
        </Space.Compact>
    </SelectInputWrapper>
  )
})
export default SelectInput