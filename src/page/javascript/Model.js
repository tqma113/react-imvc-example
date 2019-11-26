export const initialState = {
  count: 0
}

export const INCREASE = (state) => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const DECREASE = (state) => {
  return {
    ...state,
    count: state.count - 1
  }
}