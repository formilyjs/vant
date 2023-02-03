import type { ISchema } from '@formily/vue'

export const Rate: ISchema = {
  type: 'object',
  properties: {
    count: {
      type: 'number',
      default: 5,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
    },
    size: {
      type: 'string',
      default: '20px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    gutter: {
      type: 'string',
      default: '4px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    color: {
      type: 'string',
      default: '#ee0a24',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
    },
    voidColor: {
      type: 'string',
      default: '#c8c9cc',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
    },
    disabledColor: {
      type: 'string',
      default: '#c8c9cc',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
    },
    allowHalf: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
