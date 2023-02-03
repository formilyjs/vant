import { createLocales } from '@designable/core'
import { FormItemProps } from './FormItem'

export const Cascader = createLocales(FormItemProps, {
  'zh-CN': {
    title: '联级选择',
    settings: {
      'x-component-props': {
        cascaderProps: {
          title: '标题',
          'active-color': '激活状态颜色',
          clearable: '可以清空',
          'show-header': '展示标题栏',
          'field-names': {
            title: '自定义字段',
            tooltip: '自定义 options 结构中的字段',
          },
        },
        formItemProps: {
          placeholder: '占位提示',
          format: {
            title: '格式',
            tooltip: '显示渲染函数，格式：(data)=>string',
          },
        },
      },
    },
  },
  'en-US': {
    title: 'Cascader',
    settings: {
      'x-component-props': {
        cascaderProps: {
          title: 'Title',
          'active-color': 'Active color',
          clearable: 'Clearable',
          'show-header': 'Show header',
          'field-names': {
            title: 'Field name',
            tooltip: 'Custom the fields of options',
          },
        },
        formItemProps: {
          placeholder: 'Placeholder',
          format: {
            title: 'Format',
            tooltip: 'Render function, Formatter: (data)=> string',
          },
        },
      },
    },
  },
})
