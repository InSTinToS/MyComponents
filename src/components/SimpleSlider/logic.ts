import { IUseSimpleSliderReturn, TUseSimpleSlider } from './types'

import { useState } from 'react'

const variants = {
  center: { x: 0, zIndex: 1, opacity: 1 },
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '100%' : '-100%'
  }),
  exit: (direction: number) => ({
    zIndex: 0,
    opacity: 0,
    x: direction < 0 ? '100%' : '-100%'
  })
}

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity

export const useSimpleSlider: TUseSimpleSlider = ({ items, startFrom }) => {
  const swipeConfidenceThreshold = 10000

  const [[page, direction], setPage] = useState([
    startFrom === 'start' ? 0 : items.length - 1,
    0
  ])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const onDragEnd: IUseSimpleSliderReturn['liMotionProps']['onDragEnd'] = (
    _e,
    { offset, velocity }
  ) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) paginate(1)
    else if (swipe > swipeConfidenceThreshold) paginate(-1)
  }

  return {
    page,
    leftButtonParams: { disabled: page === 0, paginate },
    presenceMotionProps: { initial: false, custom: direction, mode: 'wait' },
    rightButtonParams: { disabled: page === items.length - 1, paginate },
    liMotionProps: {
      variants,
      onDragEnd,
      exit: 'exit',
      dragElastic: 1,
      initial: 'enter',
      custom: direction,
      animate: 'center',
      dragConstraints: { left: 0, right: 0 },
      transition: {
        opacity: { duration: 0.2 },
        x: { type: 'spring', stiffness: 300, damping: 30 }
      }
    }
  }
}
