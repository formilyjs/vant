import { FormItem } from './FormItem'
import type { ISchema } from '@formily/vue'

export const Cascader: ISchema = {
  type: 'object',
  properties: {
    cascaderProps: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        'active-color': {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'ColorInput',
          'x-component-props': {
            allowClear: true,
          },
        },
        clearable: {
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
        },
        'show-header': {
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
          'x-component-props': {
            defaultChecked: true,
          },
        },
        'field-names': {
          type: 'object',
          'x-decorator': 'FormItem',
          'x-component': 'ValueInput',
          'x-component-props': {
            include: ['EXPRESSION'],
          },
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
        format: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'ValueInput',
          'x-component-props': {
            include: ['EXPRESSION'],
          },
        },
      },
    },
  },
}
