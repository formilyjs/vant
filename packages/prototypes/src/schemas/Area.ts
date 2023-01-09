import type { ISchema } from '@formily/vue'

export const Area: ISchema = {
  type: 'object',
  properties: {
    'formItemProps.placeholder': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    'datetimePickerProps.title': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
