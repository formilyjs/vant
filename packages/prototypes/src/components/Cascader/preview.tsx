import { Cascader as FormilyCascader } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Cascader = composeExport(FormilyCascader, {
  Behavior: createBehavior({
    name: 'Cascader',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Cascader',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Cascader),
    },
    designerLocales: AllLocales.Cascader,
  }),
  Resource: createResource({
    icon: 'CascaderSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'Cascader',
          // 'x-decorator': 'FormItem',
          'x-component': 'Cascader',
          'x-component-props': {
            formItemProps: {},
          },
        },
      },
    ],
  }),
})
