import type { ISchema } from '@formily/vue'

export const Switch: ISchema = {
  type: 'object',
  properties: {
    'active-value': {
      type: 'string|boolean|number',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        exclude: ['EXPRESSION'],
      },
    },
    'inactive-value': {
      type: 'string|boolean|number',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        exclude: ['EXPRESSION'],
      },
    },
    'active-color': {
      type: 'string|boolean|number',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {},
    },
    'inactive-color': {
      type: 'string|boolean|number',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {},
    },
    size: {
      type: 'string|number',
      default: '24px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
  },
}
