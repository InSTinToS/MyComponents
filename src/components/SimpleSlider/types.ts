import {
  AnimatePresenceProps,
  HTMLMotionProps,
  MotionProps
} from 'framer-motion'
import { ReactNode } from 'react'

export interface ISliderButtonProps {
  disabled: boolean
  paginate: (direction: number) => void
}

export interface ISimpleSliderProps {
  items: ReactNode[]
  draggable?: boolean
  startFrom?: 'start' | 'end'
  itemProps?: HTMLMotionProps<'li'>
  animatePresenceProps?: AnimatePresenceProps
  leftButton: (params: ISliderButtonProps) => ReactNode
  rightButton: (params: ISliderButtonProps) => ReactNode
}

interface IUseSimpleSliderParams {
  items: ISimpleSliderProps['items']
  startFrom: ISimpleSliderProps['startFrom']
}

export interface IUseSimpleSliderReturn {
  page: number
  liMotionProps: MotionProps
  leftButtonParams: ISliderButtonProps
  rightButtonParams: ISliderButtonProps
  presenceMotionProps: AnimatePresenceProps
}

export type TUseSimpleSlider = (
  params: IUseSimpleSliderParams
) => IUseSimpleSliderReturn
