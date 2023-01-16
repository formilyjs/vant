import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Slider as VanSlider } from 'vant'
import { transformComponent } from '../__builtins__'
import { PreviewText } from '../preview-text'

import type { Slider as VanSliderProps } from 'vant'

export type SliderProps = VanSliderProps

const TransformVanSlider = transformComponent<SliderProps>(VanSlider, {
  change: 'input',
})

export const Slider = connect(
  TransformVanSlider,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Slider)
)
export default Slider
