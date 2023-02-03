import { DatetimePicker as FromilyDatetimePicker } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const DatetimePicker = composeExport(FromilyDatetimePicker, {
  Behavior: createBehavior({
    name: 'DateTimePicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'DatetimePicker',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.DatetimePicker),
    },
    designerLocales: AllLocales.DatetimePicker,
  }),
  Resource: createResource({
    icon: 'TimePickerSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'TimePicker',
          // 'x-decorator': 'FormItem',
          'x-component': 'DatetimePicker',
          'x-component-props': {
            datetimePickerProps: {
              type: 'time',
            },
            formItemProps: {},
          },
        },
      },
    ],
  }),
})
