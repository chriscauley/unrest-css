import classnames from 'classnames'

const icon = (slug, extra) => classnames('fa fa-' + slug, extra)

// useful for making a lot of icons with similar styles
icon.makeSet = (icons, extra) => {
  const icon_set = {}
  icons.forEach(slug => icon_set[slug] = icon(slug, extra))
  return icon_set
}

export default icon