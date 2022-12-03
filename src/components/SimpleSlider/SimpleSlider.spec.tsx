import { SimpleSlider } from '.'
import { useSimpleSlider } from './logic'

import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'

const items = [<div key='1'>Page 1</div>, <div key='2'>Page 2</div>]

describe('SimpleSlider', () => {
  let _debug: any
  let _container: any

  beforeEach(() => {
    const { container: c, debug: d } = render(
      <SimpleSlider
        items={items}
        leftButton={({ disabled, paginate }) => (
          <button
            type='button'
            disabled={disabled}
            onClick={() => {
              paginate(-1)
            }}
          >
            Left
          </button>
        )}
        rightButton={({ disabled, paginate }) => (
          <button
            type='button'
            disabled={disabled}
            onClick={() => {
              paginate(1)
            }}
          >
            Right
          </button>
        )}
      />
    )

    _container = c
    _debug = d
  })

  it('should disable correctly button when is on start or end', () => {
    const rightButton = screen.getByRole('button', { name: 'Right' })
    const leftButton = screen.getByRole('button', { name: 'Left' })

    expect(leftButton).toBeDisabled()
    expect(rightButton).not.toBeDisabled()

    userEvent.click(rightButton)

    expect(leftButton).not.toBeDisabled()
    expect(rightButton).toBeDisabled()
  })

  it('should be able to switch between pages using buttons', async () => {
    const rightButton = screen.getByRole('button', { name: 'Right' })
    const leftButton = screen.getByRole('button', { name: 'Left' })

    expect(screen.queryByText('Page 1')).toBeInTheDocument()
    expect(screen.queryByText('Page 2')).not.toBeInTheDocument()

    userEvent.click(rightButton)

    await waitFor(() => {
      expect(screen.queryByText('Page 1')).not.toBeInTheDocument()
      expect(screen.queryByText('Page 2')).toBeInTheDocument()
    })

    userEvent.click(leftButton)

    await waitFor(() => {
      expect(screen.queryByText('Page 1')).toBeInTheDocument()
      expect(screen.queryByText('Page 2')).not.toBeInTheDocument()
    })
  })
})

describe('useSimpleSlider', () => {
  it('should disable correctly button when is on start or end', async () => {
    const { result } = renderHook(() => useSimpleSlider({ items }))

    expect(result.current.leftButtonParams.disabled).toBe(true)
    expect(result.current.rightButtonParams.disabled).toBe(false)

    await act(() => result.current.rightButtonParams.paginate(1))

    expect(result.current.leftButtonParams.disabled).toBe(false)
    expect(result.current.rightButtonParams.disabled).toBe(true)

    await act(() => result.current.leftButtonParams.paginate(-1))

    expect(result.current.leftButtonParams.disabled).toBe(true)
    expect(result.current.rightButtonParams.disabled).toBe(false)
  })

  it('should be able to switch between pages using buttons', async () => {
    const { result } = renderHook(() => useSimpleSlider({ items }))

    expect(result.current.page).toBe(0)

    await act(() => result.current.rightButtonParams.paginate(1))

    expect(result.current.page).toBe(1)

    await act(() => result.current.leftButtonParams.paginate(-1))

    expect(result.current.page).toBe(0)
  })
})
