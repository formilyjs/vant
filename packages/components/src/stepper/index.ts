import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Stepper as VanStepper } from 'vant'
import { transformComponent } from '../__builtins__'
import { PreviewText } from '../preview-text'

import type { Stepper as VanStepperProps } from 'vant'

export type StepperProps = VanStepperProps

const TransformVanStepper = transformComponent<StepperProps>(VanStepper, {
  change: 'input',
})

export const Stepper = connect(
  TransformVanStepper,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Stepper)
)
export default Stepper
