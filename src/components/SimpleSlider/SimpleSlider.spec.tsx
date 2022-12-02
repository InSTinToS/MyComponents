import { SimpleSlider } from '.'
import { ISimpleSliderForward } from './types'

import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import React, { useRef } from 'react'

describe('SimpleSlider', () => {
  it('should hide buttons when is on start or end', async () => {
    const { result } = renderHook(() => useRef<ISimpleSliderForward>(null))

    const sliderRef = result.current

    const items = [<div key='1'>Page 1</div>, <div key='2'>Page 2</div>]

    render(
      <SimpleSlider
        ref={sliderRef}
        items={items}
        leftButton={() => (
          <button
            type='button'
            onClick={() => {
              sliderRef.current?.onLeftClick()
            }}
          >
            Left
          </button>
        )}
        rightButton={() => (
          <button
            type='button'
            onClick={() => {
              sliderRef.current?.onRightClick()
            }}
          >
            Right
          </button>
        )}
      />
    )

    const rightButton = screen.getByRole('button', { name: 'Right' })
    expect(rightButton).toBeTruthy()
    userEvent.click(rightButton)
    expect(screen.queryByRole('button', { name: 'Right' })).toBeFalsy()

    const leftButton = screen.getByRole('button', { name: 'Left' })
    expect(leftButton).toBeTruthy()
    userEvent.click(leftButton)
    expect(screen.queryByRole('button', { name: 'Left' })).toBeFalsy()
  })
})
