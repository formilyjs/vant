import { Switch as FormilySwitch } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Switch = composeExport(FormilySwitch, {
  Behavior: createBehavior({
    name: 'Switch',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Switch',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Switch),
    },
    designerLocales: AllLocales.Switch,
  }),
  Resource: createResource({
    icon: 'SwitchSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'boolean',
          title: 'Switch',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
        },
      },
    ],
  }),
})
