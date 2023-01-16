import type { ISchema } from '@formily/vue'

export const Calendar: ISchema & { RangePicker?: ISchema } = {
  type: 'object',
  properties: {
    'formItemProps.placeholder': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    'calendarProps.title': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    'calendarProps.defaultDate': {
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
    'calendarProps.minDate': {
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
    'calendarProps.maxDate': {
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
    'calendarProps.showConfirm': {
      default: true,
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    'calendarProps.confirmText': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    'calendarProps.confirmDisabledText': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
