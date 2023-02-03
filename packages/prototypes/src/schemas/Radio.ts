import type { ISchema } from '@formily/vue'

export const Radio: ISchema & { Group?: ISchema } = {
  type: 'object',
  properties: {
    shape: {
      type: 'string',
      default: 'round',
      enum: ['round', 'square'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        allowClear: true,
      },
    },
    'label-disabled': {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    'label-position': {
      type: 'string',
      default: 'left',
      enum: ['left', 'right'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        allowClear: true,
      },
    },
    'icon-size': {
      type: 'string',
      default: '20px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    'checked-color': {
      type: 'string',
      default: '#1989fa',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {},
    },
  },
}

Radio.Group = {
  type: 'object',
  properties: {
    direction: {
      default: 'horizontal',
      type: 'string',
      enum: ['horizontal', 'vertical'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        allowClear: true,
      },
    },
    iconSize: {
      type: 'string',
      default: '20px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    checkedColor: {
      type: 'string',
      default: '#1989fa',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {},
    },
  },
}
