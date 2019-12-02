import Controller from 'react-imvc/controller'
import { BaseState } from 'react-imvc'

export default class Todo extends Controller<BaseState, {}> {
  SSR = false
  componentWillCreate() {
    console.log('adsfasdfasdfasdf')
  }
}