import {
  AnimatePresence,
  AnimatePresenceProps,
  HTMLMotionProps,
  Variants,
  motion
} from 'framer-motion'
import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState
} from 'react'

interface ISimpleSliderState {
  index: number
  direction: 'right' | 'left'
}

export interface ISimpleSliderForward {
  onLeftClick: () => void
  onRightClick: () => void
  getInfo: () => ISimpleSliderState & { showLeft: boolean; showRight: boolean }
}

export interface ISimpleSliderProps {
  items: ReactNode[]
  leftButton: ReactNode
  rightButton: ReactNode
  startFrom?: 'start' | 'end'
  liProps?: HTMLMotionProps<'li'>
  animatePresenceProps?: AnimatePresenceProps
}

const SimpleSlider = forwardRef<ISimpleSliderForward, ISimpleSliderProps>(
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
    const [{ index, direction }, setSlider] = useState<ISimpleSliderState>({
      index: startFrom === 'start' ? 0 : items.length - 1,
      direction: startFrom === 'start' ? 'left' : 'right'
    })

    const itemVariants: Variants = {
      enter: { x: '0%', opacity: 1 },
      exit: { x: direction === 'right' ? '-50%' : '50%', opacity: 0 },
      initial: { x: direction === 'right' ? '-50%' : '50%', opacity: 0 }
    }

    const onRightClick = () => {
      setSlider(prev => {
        const newIndex = prev.index + 1

        return {
          direction: 'right',
          index: newIndex <= items.length - 1 ? newIndex : prev.index
        }
      })
    }

    const onLeftClick = () => {
      setSlider(prev => {
        const newIndex = prev.index - 1

        return {
          direction: 'left',
          index: newIndex >= 0 ? newIndex : prev.index
        }
      })
    }

    const getInfo = () => ({
      index,
      direction,
      showLeft: index !== 0,
      showRight: index !== items.length - 1
    })

    useImperativeHandle(ref, () => ({ onRightClick, onLeftClick, getInfo }), [
      getInfo
    ])

    return (
      <>
        {index !== 0 && leftButton}

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

        {index !== items.length - 1 && rightButton}
      </>
    )
  }
)

SimpleSlider.displayName = 'SimpleSlider'

export default SimpleSlider
