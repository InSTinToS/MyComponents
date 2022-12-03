import { IUseSimpleSliderReturn, TUseSimpleSlider } from './types'

import { useState } from 'react'

const variants = {
  center: { x: 0, opacity: 1 },
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '100%' : '-100%'
  }),
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? '100%' : '-100%'
  })
}

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity

export const useSimpleSlider: TUseSimpleSlider = ({
  items,
  disableTimeout,
  draggable = false,
  startFrom = 'start'
}) => {
  const [animating, setAnimating] = useState(false)
  const [[page, direction], setPage] = useState([
    startFrom === 'start' ? 0 : items.length - 1,
    0
  ])

  const swipeConfidenceThreshold = 10000

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection

    if (newPage >= 0 && newPage <= items.length - 1) {
      setPage([newPage, newDirection])

      if (disableTimeout) {
        setAnimating(true)
        setTimeout(() => setAnimating(false), disableTimeout)
      }
    }
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
    cursor: draggable || !paginate ? 'grab' : 'normal',
    leftButtonParams: { disabled: page === 0 || animating, paginate },
    presenceMotionProps: { initial: false, custom: direction, mode: 'wait' },
    rightButtonParams: {
      paginate,
      disabled: page === items.length - 1 || animating
    },
    liMotionProps: {
      variants,
      onDragEnd,
      exit: 'exit',
      dragElastic: 1,
      initial: 'enter',
      custom: direction,
      animate: 'center',
      drag: draggable ? 'x' : false,
      dragConstraints: { left: 0, right: 0 },
      transition: { damping: 30, type: 'spring', stiffness: 300 }
    }
  }
}
