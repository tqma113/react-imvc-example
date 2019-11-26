import React from 'react'
import { useModel } from 'react-imvc/hook'

export default function View() {
  const [state, actions] = useModel()

  const handleAddClick = () => {
    const { INCREASE } = actions
    INCREASE()
  }

  const handleMinusClick = () => {
    const { DECREASE } = actions
    DECREASE()
  }

  return (
    <div>
      <p>
        <span>
          <button onClick={handleMinusClick}>-</button>
          <span>{state.count}</span>
          <button onClick={handleAddClick}>+</button>
        </span>
      </p>
    </div>
  )
}