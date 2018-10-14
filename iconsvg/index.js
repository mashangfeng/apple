import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'
import NewIcons from 'app/files/font/iconfont.svg.js'
import DefaultIcons from './iconfont.svg.js'

const ICON_SIZE = {
  xxs: 15, xs: 18, sm: 21, md: 22, lg: 36,
}
export default class IconSvg extends Component {
  constructor(props) {
    super(props)
    this.icons = Object.assign(DefaultIcons, NewIcons)
  }

  render() {
    const { type, width, height, size, style, color } = this.props
    return (
      <Svg
        width={width || ICON_SIZE[size] || 22}
        height={height || width || ICON_SIZE[size] || 22}
        viewBox={this.icons.viewBox[type] || '0 0 1024 1024'}
        style={{ ...style }}
      >
        {
          this.icons[type] && this.icons[type].map((path, i) => {
            const fill = color || path.fill
            return <Path key={i} d={path.d} fill={fill} />
          })
        }
      </Svg>
    )
  }
}
