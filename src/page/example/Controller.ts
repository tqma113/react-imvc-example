import Controller from 'react-imvc/controller'
import * as Model from './Model'
import View from './View'
import { State, Actions } from './type'

export default class Todo extends Controller<State, Actions> {
  View = View
  Model = Model
}