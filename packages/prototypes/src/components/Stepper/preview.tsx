import { Stepper as FromilyStepper } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Stepper = composeExport(FromilyStepper, {
  Behavior: createBehavior({
    name: 'Stepper',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Stepper',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Stepper),
    },
    designerLocales: AllLocales.Stepper,
  }),
  Resource: createResource({
    icon: 'InputSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'number',
          title: 'Stepper',
          'x-decorator': 'FormItem',
          'x-component': 'Stepper',
        },
      },
    ],
  }),
})
