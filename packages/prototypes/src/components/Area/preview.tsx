import { Area as FormilyArea } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Area = composeExport(FormilyArea, {
  Behavior: createBehavior({
    name: 'Area',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Area',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Area),
    },
    designerLocales: AllLocales.Area,
  }),
  Resource: createResource({
    icon: 'AreaSource',
    elements: [
      {
        componentName: 'Area',
        props: {
          type: 'string',
          title: 'Area',
          // 'x-decorator': 'FormItem',
          'x-component': 'Area',
          'x-component-props': {},
        },
      },
    ],
  }),
})
