import { FormItem } from './FormItem'
import type { ISchema } from '@formily/vue'

export const Calendar: ISchema & { RangePicker?: ISchema } = {
  type: 'object',
  properties: {
    calendarProps: {
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
        defaultDate: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            valueFormat: 'YYYY-MM-DDT00:00:00Z',
            align: {
              points: ['br', 'br'],
            },
          },
        },
        minDate: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            valueFormat: 'YYYY-MM-DDT00:00:00Z',
            align: {
              points: ['br', 'br'],
            },
          },
        },
        maxDate: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'DatePicker',
          'x-component-props': {
            valueFormat: 'YYYY-MM-DDT23:59:59Z',
            align: {
              points: ['br', 'br'],
            },
          },
        },
        showConfirm: {
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
          'x-component-props': {
            defaultChecked: true,
          },
        },
        confirmText: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
          },
        },
        confirmDisabledText: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
          },
        },
        format: {
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
