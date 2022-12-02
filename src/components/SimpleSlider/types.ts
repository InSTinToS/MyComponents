import { AnimatePresenceProps, HTMLMotionProps, Variants } from 'framer-motion'
import { ForwardedRef, ReactNode, Reducer } from 'react'

interface ISlideState {
  index: number
  direction: 'right' | 'left'
}

interface ISlideAction {
  maxLength: number
  minLength?: number
  type: 'left' | 'right'
}

export type TSliderReducer = Reducer<ISlideState, ISlideAction>

export interface ISimpleSliderForward {
  onLeftClick: () => void
  onRightClick: () => void
  getInfo: () => ISlideState & { showLeft: boolean; showRight: boolean }
}

export interface ISimpleSliderProps {
  items: ReactNode[]
  startFrom?: 'start' | 'end'
  liProps?: HTMLMotionProps<'li'>
  animatePresenceProps?: AnimatePresenceProps
  leftButton: (disabled: boolean) => ReactNode
  rightButton: (disabled: boolean) => ReactNode
}

interface IUseSimpleSliderParams {
  items: ISimpleSliderProps['items']
  ref: ForwardedRef<ISimpleSliderForward>
  startFrom: ISimpleSliderProps['startFrom']
}

interface IUseSimpleSliderReturn {
  itemVariants: Variants
  index: ISlideState['index']
}

export type TUseSimpleSlider = (
  params: IUseSimpleSliderParams
) => IUseSimpleSliderReturn
