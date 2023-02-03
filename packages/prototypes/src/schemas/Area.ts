import { FormItem } from './FormItem'
import type { ISchema } from '@formily/vue'

export const Area: ISchema = {
  type: 'object',
  properties: {
    areaProps: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
          },
        },
        confirmButtonText: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
          },
        },
        cancelButtonText: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
          },
        },
        areaList: {
          type: 'string',
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
