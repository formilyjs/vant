import type { ISchema } from '@formily/vue'

export const FormItem: ISchema = {
  type: 'object',
  properties: {
    labelWidth: {
      type: 'string|number',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['inherit', 'px', 'em'],
      },
      'x-reactions': (field) => {
        field.value === 'inherit' && field.setValue(undefined)
      },
    },
    labelAlign: {
      type: 'string',
      enum: ['left', 'right', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'right',
      },
    },
    wrapperAlign: {
      type: 'string',
      enum: ['left', 'right', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'left',
      },
    },
    colon: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    size: {
      type: 'string',
      enum: ['large', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: null,
      },
    },
    center: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {},
    },
    isLink: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {},
    },
    arrowDirection: {
      type: 'string',
      enum: ['left', 'right', 'up', 'down'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'right',
      },
    },
    leftIcon: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
    },
    rightIcon: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
    },
    iconPrefix: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {},
    },
    border: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
}
