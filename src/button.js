import CSS from './CSS'
import variants from './variants'

export default CSS({
  __base: 'btn',
  __default: 'primary',
  ...variants.make((variant) => `-${variant}`),
})
