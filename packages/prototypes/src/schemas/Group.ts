import type { ISchema } from '@formily/vue'

export const Group: ISchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },    
    border: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
