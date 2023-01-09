import { Input as FormilyInput } from '@formily/vant'
import { createBehavior, createResource } from '@designable/core'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import type { DnFC } from '@formily/antdv-designable'

export const Input: DnFC<Vue.Component<any, any, any, typeof FormilyInput>> =
  composeExport(FormilyInput, {
    Behavior: createBehavior(
      {
        name: 'Input',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Input',
        designerProps: {
          propsSchema: createFieldSchema(AllSchemas.Input),
        },
        designerLocales: AllLocales.Input,
      },
    ),
    Resource: createResource(
      {
        icon: 'InputSource',
        elements: [
          {
            componentName: 'Field',
            props: {
              type: 'string',
              title: 'Input',
              // 'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-component-props': { placeholder: '请输入' },
            },
          },
        ],
      },
    ),
  })
