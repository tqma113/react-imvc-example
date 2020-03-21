import { BaseState } from 'react_imvc'
import * as Model from './Model'

export type Actions = Omit<typeof Model, 'initialState'>

export type { default as Ctrl } from './Controller'

export type State = BaseState & {
  count: number
}