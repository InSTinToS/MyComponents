import { useSimpleSlider } from './logic'
import { ISimpleSliderProps } from './types'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export const SimpleSlider = ({
  items,
  itemProps,
  leftButton,
  rightButton,
  disableTimeout,
  draggable = false,
  startFrom = 'start',
  animatePresenceProps
}: ISimpleSliderProps) => {
  const {
    page,
    cursor,
    liMotionProps,
    leftButtonParams,
    rightButtonParams,
    presenceMotionProps
  } = useSimpleSlider({ items, startFrom, draggable, disableTimeout })

  return (
    <>
      {leftButton(leftButtonParams)}

      <AnimatePresence {...presenceMotionProps} {...animatePresenceProps}>
        {items.map(
          (item, index) =>
            index === page && (
              <motion.li
                key={index}
                style={{ cursor, overflow: 'hidden' }}
                {...liMotionProps}
                {...itemProps}
              >
                {item}
              </motion.li>
            )
        )}
      </AnimatePresence>

      {rightButton(rightButtonParams)}
    </>
  )
}
