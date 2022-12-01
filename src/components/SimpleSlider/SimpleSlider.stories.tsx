import SimpleSlider, { ISimpleSliderForward, ISimpleSliderProps } from './index'

import { TMeta, TStory } from '@src/types/storybook.types'

import React, { useRef } from 'react'

const metadata: TMeta<typeof SimpleSlider> = {
  argTypes: {},
  title: 'SimpleSlider',
  component: SimpleSlider,
  parameters: {
    docs: { description: { component: `Simple slider component` } }
  }
}

const Template: TStory<typeof SimpleSlider> = (args: ISimpleSliderProps) => {
  const simpleSliderRef = useRef<ISimpleSliderForward>(null)

  const items = [
    <li key='1' style={{ width: '100%' }}>
      Page 1
    </li>,
    <li key='2' style={{ width: '100%' }}>
      Page 2
    </li>
  ]

  return (
    <ul style={{}}>
      <SimpleSlider
        {...args}
        items={items}
        ref={simpleSliderRef}
        leftButton={
          <button
            type='button'
            onClick={() => simpleSliderRef.current?.onLeftClick()}
          >
            Left
          </button>
        }
        rightButton={
          <button
            type='button'
            onClick={() => simpleSliderRef.current?.onRightClick()}
          >
            Right
          </button>
        }
      />
    </ul>
  )
}

export const Default = Template.bind({})

Default.args = {} as ISimpleSliderProps

export default metadata
