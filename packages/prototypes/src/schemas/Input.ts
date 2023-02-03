import { FormItem } from './FormItem'
import type { ISchema } from '@formily/vue'

export const Input: ISchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      default: 'text',
      enum: ['text', 'tel', 'digit', 'number', 'textarea', 'password'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        allowClear: true,
      },
    },
    ...(FormItem.properties as object),
    clearable: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    autofocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    placeholder: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        allowClear: true,
      },
    },
    size: {
      type: 'string',
      default: null,
      enum: ['large', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        allowClear: true,
      },
      'x-reactions': (field) => {
        field.visible =
          field.form?.values?.['x-component-props']?.type !== 'textarea'
      },
    },
    maxlength: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
    },
    'show-word-limit': {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {},
    },
    rows: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
      'x-reactions': (field) => {
        field.visible =
          field.form?.values?.['x-component-props']?.type === 'textarea'
      },
    },
    autoSize: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['BOOLEAN', 'EXPRESSION'],
      },
      'x-reactions': (field) => {
        field.visible =
          field.form?.values?.['x-component-props']?.type === 'textarea'
      },
    },
  },
}
