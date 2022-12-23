import type { ISchema } from '@formily/vue'

export const Checkbox: ISchema & { Group?: ISchema } = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}

Checkbox.Group = {
  type: 'object',
  properties: {
    direction: {
      default: 'horizontal',
      type: 'string',
      enum: [
        {
          label: '水平',
          value: 'horizontal',
        },
        {
          label: '垂直',
          value: 'vertical',
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        size: 'small',
      },
    },
    checkedColor: {
      type: 'string',
      default: '#1989fa',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {
        size: 'small',
      },
    },
  },
}
