import { TSliderReducer, TUseSimpleSlider } from './types'

import { Variants } from 'framer-motion'
import { useEffect, useImperativeHandle, useReducer } from 'react'

const sliderReducer: TSliderReducer = (
  state,
  { type, maxLength, minLength = 0 }
) => {
  switch (type) {
    case 'left': {
      const newIndex = state.index - 1

      return {
        direction: 'left',
        index: newIndex >= minLength ? newIndex : state.index
      }
    }

    case 'right': {
      const newIndex = state.index + 1

      return {
        direction: 'right',
        index: newIndex <= maxLength ? newIndex : state.index
      }
    }

    default: {
      return state
    }
  }
}

const useSimpleSlider: TUseSimpleSlider = ({ ref, startFrom, items }) => {
  const [{ index, direction }, dispatch] = useReducer(sliderReducer, {
    index: startFrom === 'start' ? 0 : items.length - 1,
    direction: startFrom === 'start' ? 'right' : 'left'
  })

  useEffect(() => {
    console.log(index, direction)
  }, [index, direction])

  const itemVariants: Variants = {
    enter: { x: '0%', opacity: 1 },
    exit: { x: direction === 'right' ? '-100%' : '100%', opacity: 0 },
    initial: { x: direction !== 'right' ? '-100%' : '100%', opacity: 0 }
  }

  const onRightClick = () => {
    dispatch({ type: 'right', maxLength: items.length })
  }

  const onLeftClick = () => {
    dispatch({ type: 'left', maxLength: items.length })
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

  return { itemVariants, index }
}

export default useSimpleSlider
