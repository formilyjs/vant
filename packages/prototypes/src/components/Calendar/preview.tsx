import { Calendar as FormilyCalendar } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Calendar = composeExport(FormilyCalendar, {
  Behavior: createBehavior({
    name: 'Calendar',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Calendar',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Calendar),
    },
    designerLocales: AllLocales.Calendar,
  }),
  Resource: createResource({
    icon: 'DatePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'Calendar',
          // 'x-decorator': 'FormItem',
          'x-component': 'Calendar',
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
