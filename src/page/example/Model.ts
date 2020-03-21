import { Action } from 'react-imvc'
import { State } from './type'

export const initialState = {
  count: 0
}

export const INCREASE: Action<State> = (state) => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const DECREASE: Action<State> = (state) => {
  return {
    ...state,
    count: state.count - 1
  }
}

export const UPDATE_STATE: Action<State, Partial<State>> = (state, partialSTate) => {
  return {
    ...state,
    ...partialSTate
  }
}