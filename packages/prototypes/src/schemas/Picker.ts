import { FormItem } from './FormItem'
import type { ISchema } from '@formily/vue'

export const Picker: ISchema = {
  type: 'object',
  properties: {
    pickerProps: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
    formItemProps: {
      type: 'object',
      properties: {
        ...(FormItem.properties as object),
        placeholder: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
          },
        },
      },
    },
  },
}
