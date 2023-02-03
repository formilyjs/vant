import { createLocales } from '@designable/core'
import { FormItemProps } from './FormItem'

export const Picker = createLocales(FormItemProps, {
  'zh-CN': {
    title: '选择框',
    settings: {
      'x-component-props': {
        pickerProps: {
          title: '标题',
        },
        formItemProps: {
          placeholder: '占位提示',
          clearable: '显示清除按纽',
        },
      },
    },
  },
  'en-US': {
    title: 'Picker',
    settings: {
      'x-component-props': {
        pickerProps: {
          title: 'Title',
        },
        formItemProps: {
          placeholder: 'Placeholder',
          clearable: 'Clearable',
        },
      },
    },
  },
})
