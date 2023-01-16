import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Rate as VanRate } from 'vant'
import { transformComponent } from '../__builtins__'
import { PreviewText } from '../preview-text'

import type { Rate as VanRateProps } from 'vant'

export type RateProps = VanRateProps

const TransformVanRate = transformComponent<RateProps>(VanRate, {
  change: 'input',
})

export const Rate = connect(
  TransformVanRate,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Rate)
)
export default Rate
