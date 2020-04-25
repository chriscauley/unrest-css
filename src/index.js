import alert from './alert'
import button from './button'
import card from './card'
import hx from './hx'
import icon from './icon'
import modal from './modal'
import CSS, { cssFunc } from './CSS'

const nav = CSS({
  outer: "navbar",
  section: "navbar-section",
  brand: "navbar-brand",
})




export default {
  nav,
  footer: cssFunc('ur-footer'),
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
