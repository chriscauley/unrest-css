import alert from './alert'
import button from './button'
import card from './card'
import hx from './hx'
import icon from './icon'
import modal from './modal'
import CSS, { cssFunc } from './CSS'

export default {
  alert,
  button,
  card,
  ...hx,
  icon,
  link: cssFunc('text-blue-500'),
  modal,
  CSS,
  cssFunc,
}
