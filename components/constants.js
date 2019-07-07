import { Dimensions } from 'react-native'

export const BLUE = '#30d0fe'
export const WHITE = '#fff'

export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

export const responsive = {
  mobile315: W > 315 && W < 341,
  mobile342: W > 342 && W < 375,
  mobile375: W > 375 && W < 415,
  tablet: W < 990 && W > 415
}

export const Device = {
  // eslint-disable-next-line
  select(variants) {
    if (W >= 300 && W <= 314) return variants.mobile300 || {}
    if (W >= 315 && W <= 341) return variants.iphone5 || {}
    if (W >= 342 && W <= 359) return variants.mobile342 || {}
    if (W >= 360 && W <= 374) return variants.mi5 || {}
    if (W >= 375 && W <= 399) return variants.iphone678 || {}
    if (W >= 400 && W <= 409) return variants.mobile400 || {}
    if (W >= 410 && W <= 414) return variants.googlePixel || {}
    if (W >= 415 && W <= 435) return variants.mobile415 || {}
    if (W >= 435 && W <= 480) return variants.redmiNote5 || {}
    if (W >= 800) return variants.web || {}
  }
}
