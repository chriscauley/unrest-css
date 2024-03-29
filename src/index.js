import alert from './alert'
import badge from './badge'
import button from './button'
import card from './card'
import grid from './grid'
import hx from './hx'
import icon from './icon'
import modal from './modal'
import pill from './pill'
import CSS, { cssFunc } from './CSS'

const nav = CSS({
  outer: "navbar",
  section: "navbar__section",
  brand: "navbar__brand",
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
  CSS,
  cssFunc,
  alert,
  badge,
  button,
  card,
  dropdown,
  footer: cssFunc('ur-footer'),
  grid,
  ...hx,
  icon,
  link: cssFunc('link'),
  list,
  nav,
  modal,
  pill,
  install(app) {
    app.config.globalProperties.$css = this
  }
}
