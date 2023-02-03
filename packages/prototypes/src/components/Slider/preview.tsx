import { Slider as VanSlider } from 'vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Slider = composeExport(VanSlider, {
  Behavior: createBehavior({
    name: 'Slider',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Slider',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Slider),
    },
    designerLocales: AllLocales.Slider,
  }),
  Resource: createResource({
    icon: 'SliderSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'number|array<number>',
          title: 'Slider',
          'x-decorator': 'FormItem',
          'x-component': 'Slider',
        },
      },
    ],
  }),
})
