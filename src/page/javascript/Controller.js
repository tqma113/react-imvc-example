import Controller from 'react-imvc/controller'
import * as Model from './Model'
import View from './View'

export default class Todo extends Controller {
  View = View
  Model = Model
}