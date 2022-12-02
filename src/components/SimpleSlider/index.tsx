import useSimpleSlider from './logic'
import { ISimpleSliderForward, ISimpleSliderProps } from './types'

import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef } from 'react'

export const SimpleSlider = forwardRef<
  ISimpleSliderForward,
  ISimpleSliderProps
>(
  (
    {
      items,
      liProps,
      leftButton,
      rightButton,
      startFrom = 'start',
      animatePresenceProps
    },
    ref
  ) => {
    const { index, itemVariants } = useSimpleSlider({ ref, items, startFrom })

    return (
      <>
        {leftButton(index === 0)}

        <AnimatePresence exitBeforeEnter={true} {...animatePresenceProps}>
          {items.map(
            (item, itemIndex) =>
              itemIndex === index && (
                <motion.li
                  exit='exit'
                  animate='enter'
                  key={itemIndex}
                  initial='initial'
                  variants={itemVariants}
                  transition={{ type: 'tween', duration: 0.5 }}
                  {...liProps}
                >
                  {item}
                </motion.li>
              )
          )}
        </AnimatePresence>

        {rightButton(index === items.length - 1)}
      </>
    )
  }
)
SimpleSlider.displayName = 'SimpleSlider'
