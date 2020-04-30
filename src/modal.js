import CSS from './CSS'

const modal = CSS({
  outer:
    'fixed w-full h-full top-0 left-0 flex items-center justify-center z-10 p-8',
  mask: 'absolute w-full h-full cursor-pointer bg-gray-600 opacity-25',
})

modal.content = CSS({
  __base: 'p-4 bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto max-h-full',
  __default: 'lg',
  fullscreen: '',
  xs: 'max-w-xs w-11/12',
  sm: 'max-w-sm w-11/12',
  md: 'max-w-md w-11/12',
  lg: 'max-w-lg w-11/12',
  xl: 'max-w-xl w-11/12',
})

export default modal