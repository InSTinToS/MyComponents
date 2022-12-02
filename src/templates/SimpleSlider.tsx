import { SimpleSlider } from '../components/SimpleSlider'
import { ISimpleSliderForward } from '../components/SimpleSlider/types'
import '../tailwind.css'
import { TButtonProps, TDivProps } from '../types/react.types'

import React, { useRef } from 'react'

export const SliderItem = ({ children, ...props }: TDivProps) => (
  <div
    className='mx-4 flex h-10 px-10 text-purple-600 items-center justify-center border-2 border-purple-600  py-2w-40'
    {...props}
  >
    {children}
  </div>
)

export const SliderButton = ({ children, ...props }: TButtonProps) => (
  <button
    type='button'
    className='bg-purple-600 px-4 h-10 rounded-md text-white shadow-lg disabled:bg-purple-200'
    {...props}
  >
    {children}
  </button>
)

export const SimpleSliderTemplate = ({ ...args }) => {
  const simpleSliderRef = useRef<ISimpleSliderForward>(null)

  const items = [
    <SliderItem key='1'>Page 1</SliderItem>,
    <SliderItem key='2'>Page 2</SliderItem>,
    <SliderItem key='3'>Page 3</SliderItem>,
    <SliderItem key='4'>Page 4</SliderItem>,
    <SliderItem key='5'>Page 5</SliderItem>,
    <SliderItem key='6'>Page 6</SliderItem>
  ]

  return (
    <ul className='flex items-center'>
      <SimpleSlider
        {...args}
        items={items}
        ref={simpleSliderRef}
        leftButton={disabled => (
          <SliderButton
            onClick={() => simpleSliderRef.current?.onLeftClick()}
            disabled={disabled}
          >
            Left
          </SliderButton>
        )}
        rightButton={disabled => (
          <SliderButton
            onClick={() => simpleSliderRef.current?.onRightClick()}
            disabled={disabled}
          >
            Right
          </SliderButton>
        )}
      />
    </ul>
  )
}
