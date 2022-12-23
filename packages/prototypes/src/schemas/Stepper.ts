import type { ISchema } from '@formily/vue'

export const Stepper: ISchema = {
  type: 'object',
  properties: {
    min: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
    },
    max: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
    },
    disabled: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
