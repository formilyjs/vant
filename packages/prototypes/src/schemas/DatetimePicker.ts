import { FormItem } from './FormItem'
import type { ISchema } from '@formily/vue'

export const DatetimePicker: ISchema & { RangePicker?: ISchema } = {
  type: 'object',
  properties: {
    datetimePickerProps: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          default: 'datetime',
          enum: [
            'datetime',
            'date',
            'time',
            'year-month',
            'month-day',
            'datehour',
          ],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            allowClear: true,
          },
        },
        title: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            allowClear: true,
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
          'x-reactions': (field) => {
            const type = field.form?.values?.['x-component-props']?.type
            field.visible = !type || type !== 'time'
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
          'x-reactions': (field) => {
            const type = field.form?.values?.['x-component-props']?.type
            field.visible = !type || type !== 'time'
          },
        },
        minHour: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'InputNumber',
          'x-component-props': {
            min: 0,
            max: 23,
          },
          'x-reactions': (field) => {
            const type = field.form?.values?.['x-component-props']?.type
            field.visible = !type || type === 'time' || type === 'datetime'
          },
        },
        maxHour: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'InputNumber',
          'x-component-props': {
            min: 0,
            max: 23,
          },
          'x-reactions': (field) => {
            const type = field.form?.values?.['x-component-props']?.type
            field.visible = !type || type === 'time' || type === 'datetime'
          },
        },
        minMinute: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'InputNumber',
          'x-component-props': {
            min: 0,
            max: 59,
          },
          'x-reactions': (field) => {
            const type = field.form?.values?.['x-component-props']?.type
            field.visible = !type || type === 'time' || type === 'datetime'
          },
        },
        maxMinute: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'InputNumber',
          'x-component-props': {
            min: 0,
            max: 59,
          },
          'x-reactions': (field) => {
            const type = field.form?.values?.['x-component-props']?.type
            field.visible = !type || type === 'time' || type === 'datetime'
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
