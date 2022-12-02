import { ISimpleSliderProps } from './types'

import { SimpleSliderTemplate } from '../../templates/SimpleSlider'
import { TMeta, TStory } from '../../types/storybook.types'
import { SimpleSlider } from './index'

import React from 'react'

const metadata: TMeta<typeof SimpleSlider> = {
  argTypes: {},
  title: 'SimpleSlider',
  component: SimpleSlider,
  parameters: {
    docs: { description: { component: `Simple slider component` } }
  }
}

const Template: TStory<typeof SimpleSlider> = (args: ISimpleSliderProps) => (
  <SimpleSliderTemplate {...args} />
)

export const Default = Template.bind({})

export default metadata

Default.args = {} as ISimpleSliderProps
