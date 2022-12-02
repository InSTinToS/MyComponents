import { SimpleSlider } from '../components/SimpleSlider'
import '../tailwind.css'
import { TButtonProps, TDivProps } from '../types/react.types'

import React from 'react'

export const SliderItem = ({ children, ...props }: TDivProps) => (
  <div
    className='relative z-0 mx-4 flex h-10 px-10 text-purple-600 items-center justify-center border-2 border-purple-600  py-2w-40'
    {...props}
  >
    {children}
  </div>
)

export const SliderButton = ({ children, ...props }: TButtonProps) => (
  <button
    type='button'
    className='relative z-10 bg-purple-600 px-4 h-10 rounded-md text-white shadow-lg disabled:bg-purple-200'
    {...props}
  >
    {children}
  </button>
)

const items = [
  <SliderItem key='1'>Page 1</SliderItem>,
  <SliderItem key='2'>Page 2</SliderItem>,
  <SliderItem key='3'>Page 3</SliderItem>,
  <SliderItem key='4'>Page 4</SliderItem>,
  <SliderItem key='5'>Page 5</SliderItem>,
  <SliderItem key='6'>Page 6</SliderItem>
]

export const SimpleSliderTemplate = ({ ...args }) => (
  <ul className='flex items-center'>
    <SimpleSlider
      disableTimeout={1000}
      items={items}
      leftButton={({ disabled, paginate }) => (
        <SliderButton onClick={() => paginate(-1)} disabled={disabled}>
          Left
        </SliderButton>
      )}
      rightButton={({ disabled, paginate }) => (
        <SliderButton onClick={() => paginate(1)} disabled={disabled}>
          Right
        </SliderButton>
      )}
      {...args}
    />
  </ul>
)
