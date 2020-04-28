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

const list = CSS({
  outer: 'list-group',
  item: 'list-group-item',
  action: 'list-group-item list-group-item-action',
})

const dropdown = CSS({
  shelf: list.outer('absolute right-0 top-100 bg-white min-w-full w-56'),
  toggle: button('cursor-pointer'),
  outer: 'relative',
  item: list.action(),
})

export default {
  nav,
  footer: cssFunc('ur-footer'),
  alert,
  dropdown,
  button,
  list,
  card,
  ...hx,
  icon,
  link: cssFunc('text-blue-500'),
  modal,
  CSS,
  cssFunc,
}
