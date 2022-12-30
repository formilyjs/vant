import { Group as FormilyGroup } from '@formily/vant'
import { createBehavior, createResource } from '@designable/core'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { withContainer } from '../../common/Container'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Group = composeExport(withContainer(FormilyGroup), {
  Behavior: createBehavior({
    name: 'Group',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Group',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(AllSchemas.Group),
    },
    designerLocales: AllLocales.Group,
  }),
  Resource: createResource({
    icon: 'FormLayoutSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'void',
          'x-component': 'Group',
        },
      },
    ],
  }),
})
