import variants from './variants'
import CSS from './CSS'

export default CSS({
  __base: 'pill',
  __default: 'light',
  ...variants.make((variant) => `-${variant}`),
})