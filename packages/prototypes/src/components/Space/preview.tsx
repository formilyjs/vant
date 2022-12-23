import { Space as FormilySpace } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createVoidFieldSchema } from '../Field'
import { withContainer } from '../../common/Container'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Space = composeExport(withContainer(FormilySpace), {
  Behavior: createBehavior({
    name: 'Space',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Space',
    designerProps: {
      droppable: true,
      inlineChildrenLayout: true,
      propsSchema: createVoidFieldSchema(AllSchemas.Space),
    },
    designerLocales: AllLocales.Space,
  }),
  Resource: createResource({
    icon: 'SpaceSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'void',
          'x-component': 'Space',
        },
      },
    ],
  }),
})
