import { Picker as FormilyPicker } from '@formily/vant'
import { createBehavior, createResource } from '@designable/core'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Picker = composeExport(FormilyPicker, {
  Behavior: createBehavior({
    name: 'Picker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Picker',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Picker),
    },
    designerLocales: AllLocales.Picker,
  }),
  Resource: createResource({
    icon: 'SelectSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          title: 'Picker',
          enum: [
            { text: '选项1', value: 1 },
            { text: '选项2', value: 2 },
          ],
          'x-component': 'Picker',
          'x-component-props': {
            formItemProps: {
              placeholder: '请选择',
            },
          },
        },
      },
    ],
  }),
})
