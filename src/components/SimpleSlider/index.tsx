import { useSimpleSlider } from './logic'
import { ISimpleSliderProps } from './types'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export const SimpleSlider = ({
  items,
  itemProps,
  leftButton,
  rightButton,
  draggable = false,
  startFrom = 'start',
  animatePresenceProps
}: ISimpleSliderProps) => {
  const {
    page,
    liMotionProps,
    leftButtonParams,
    rightButtonParams,
    presenceMotionProps
  } = useSimpleSlider({ items, startFrom })

  return (
    <>
      {leftButton(leftButtonParams)}

      <AnimatePresence {...presenceMotionProps} {...animatePresenceProps}>
        {items.map(
          (item, index) =>
            index === page && (
              <motion.li
                key={index}
                drag={draggable ? 'x' : false}
                style={{ cursor: draggable ? 'grab' : 'normal' }}
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
