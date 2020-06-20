import CSS from './CSS'

const modal = CSS({
  outer: 'modal',
  mask: 'modal-mask',
})

modal.content = CSS({
  __base: 'modal-content',
  __default: 'lg',
  fullscreen: '',
  xs: 'max-w-xs w-11/12',
  sm: 'max-w-sm w-11/12',
  md: 'max-w-md w-11/12',
  lg: 'max-w-lg w-11/12',
  xl: 'max-w-xl w-11/12',
})

export default modal