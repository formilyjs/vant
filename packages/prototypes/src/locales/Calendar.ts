import { createLocales } from '@designable/core'
import { FormItemProps } from './FormItem'

export const Calendar = createLocales(FormItemProps, {
  'zh-CN': {
    title: '日历',
    settings: {
      'x-component-props': {
        calendarProps: {
          title: '标题',
          defaultDate: '默认日期',
          minDate: '最小日期',
          maxDate: '最大日期',
          showConfirm: '显示确认按纽',
          confirmText: '确认按钮文字',
          confirmDisabledText: '确认按钮禁用时文字',
        },
        formItemProps: {
          placeholder: '占位提示',
          format: {
            title: '格式',
            tooltip: '显示渲染函数，格式：(date)=>string',
          },
        },
      },
    },
    'en-US': {
      title: 'Calendar',
      settings: {
        'x-component-props': {
          calendarProps: {
            title: 'Title',
            defaultDate: 'Defautl date',
            minDate: 'Min date',
            maxDate: 'Max date',
            showConfirm: 'Show confirm button',
            confirmText: 'Confirm button text',
            confirmDisabledText: 'Confirm button text when disabled',
          },
          formItemProps: {
            placeholder: 'Placeholder',
            format: {
              title: 'Format',
              tooltip: 'Render function, Formatter: (date)=> string',
            },
          },
        },
      },
    },
  },
})
