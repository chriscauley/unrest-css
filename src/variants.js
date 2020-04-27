const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

const __aliases = {
  warn: 'warning',
  error: 'danger',
}

variants.make = (f) => {
  const result = {__aliases}
  variants.map((variant) => (result[variant] = f(variant)))
  return result
}

export default variants
