import type { ISchema } from '@formily/vue'

export const DatetimePicker: ISchema & { RangePicker?: ISchema } = {
  type: 'object',
  properties: {
    'formItemProps.placeholder': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    // 'datetimePickerProps.type': {
    //   type: 'string',
    //   enum: [
    //     { value: 'datetime', label: '年月日时分' },
    //     { value: 'date', label: '年月日' },
    //     { value: 'time', label: '时分' },
    //     { value: 'year-month', label: '年月' },
    //     { value: 'month-day', label: '月日' },
    //     { value: 'datehour', label: '年月日时' },
    //   ],
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Select',
    //   'x-component-props': {
    //     size: 'small',
    //     clearable: true,
    //   },
    // },
    'datetimePickerProps.title': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    'datetimePickerProps.confirmButtonText': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    'datetimePickerProps.cancelButtonText': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
