import alert from './alert'
import badge from './badge'
import button from './button'
import card from './card'
import grid from './grid'
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
  outer: 'dropdown',
  menu: 'dropdown-menu',
  toggle: 'dropdown-toggle',
  item: 'dropdown-item',
})

export default {
  nav,
  footer: cssFunc('ur-footer'),
  alert,
  dropdown,
  button,
  list,
  badge,
  card,
  ...hx,
  icon,
  link: cssFunc('link'),
  modal,
  CSS,
  cssFunc,
  grid,
}
