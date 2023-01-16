export const Calendar = {
  'zh-CN': {
    title: '日历',
    settings: {
      'x-component-props': {
        formItemProps: {
          placeholder: '占位内容',
          // clearable: '是否启用清除图标',
        },
        calendarProps: {
          title: '日历标题',
          defaultDate: '默认日期',
          minDate: '最小日期',
          maxDate: '最大日期',
          showConfirm: '显示确认按纽',
          confirmText: '确认按钮文字',
          confirmDisabledText: '确认按钮禁用时文字',
          // format: '格式',
        },
      },
    },
    'en-US': {
      title: 'DatetimePicker',
      settings: {
        'x-component-props': {
          formItemProps: {
            placeholder: 'Placeholder',
            // clearable: 'Show clear',
          },
          calendarProps: {
            title: 'Calendar Title',
            defaultDate: 'Defautl date',
            minDate: 'Min date',
            maxDate: 'Max date',
            showConfirm: 'Show confirm button',
            confirmText: 'Confirm button text',
            confirmDisabledText: 'Confirm button text when disabled',
            // format: '格式',
          },
        },
      },
    },
  },
}
