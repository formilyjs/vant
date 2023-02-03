import { createLocales } from '@designable/core'
import { FormItemProps } from './FormItem'

export const DatetimePicker = createLocales(FormItemProps, {
  'zh-CN': {
    title: '时间选择',
    settings: {
      'x-component-props': {
        datetimePickerProps: {
          type: {
            title: '类型',
            dataSource: [
              '年月日时分',
              '年月日',
              '时分',
              '年月',
              '月日',
              '年月日时',
            ],
          },
          title: '标题',
          minDate: '最小选择日期',
          maxDate: '最大选择日期',
          minHour: '最小选择小时',
          maxHour: '最大选择小时',
          minMinute: '最小选择分钟',
          maxMinute: '最大选择分钟',
          confirmButtonText: '确认按钮文字',
          cancelButtonText: '取消按钮文字',
        },
        formItemProps: {
          placeholder: '占位内容',
          format: {
            title: '格式',
            tooltip: '显示渲染函数，格式：(type, date)=>string',
          },
        },
      },
    },
  },
  'en-US': {
    title: 'DatetimePicker',
    settings: {
      'x-component-props': {
        datetimePickerProps: {
          type: {
            title: 'Type',
            dataSource: [
              'Date&Time',
              'Date',
              'Time',
              'Year&Month',
              'Month&Day',
              'Date&Hour',
            ],
          },
          title: 'Title',
          minDate: 'Min date',
          maxDate: 'Max date',
          minHour: 'Min hour',
          maxHour: 'Max hour',
          minMinute: 'Min minute',
          maxMinute: 'Max minute',
          confirmButtonText: 'Confirm button text',
          cancelButtonText: 'Cancel button text',
        },
        formItemProps: {
          placeholder: 'Placeholder',
          format: {
            title: 'Format',
            tooltip: 'Render function, Formatter: (type, date)=> string',
          },
        },
      },
    },
  },
})
