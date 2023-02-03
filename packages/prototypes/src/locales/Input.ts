import { createLocales } from '@designable/core'
import { FormItem } from './FormItem'

export const Input = createLocales(FormItem, {
  'zh-CN': {
    title: '输入框',
    settings: {
      'x-component-props': {
        maxlength: '最大输入长度',
        'show-word-limit': '显示输入字数',
        placeholder: '占位提示',
        clearable: '可清空',
        autofocus: '自动获取焦点',
        type: {
          title: '声明 input 类型',
          dataSource: [
            'Text',
            'Tel',
            'Digit',
            'Number',
            'Textarea',
            'Password',
          ],
        },
        size: {
          title: '尺寸',
          dataSource: ['大', '默认'],
        },
        rows: '行数',
        autoSize: {
          title: '自适应高度',
          tooltip:
            '可设置为 true | false 或对象：{ maxHeight: 100, minHeight: 50 }',
        },
      },
    },
  },
  'en-US': {
    title: 'Input',
    settings: {
      'x-component-props': {
        maxlength: 'Max length',
        'show-word-limit': 'Show word count',
        placeholder: 'Placeholder',
        clearable: 'Allow clear',
        autofocus: 'Auto focus',
        type: {
          title: 'Type of input',
          dataSource: [
            'Text',
            'Tel',
            'Digit',
            'Number',
            'Textarea',
            'Password',
          ],
        },

        size: {
          title: 'Size',
          dataSource: ['Large', 'Default'],
        },
        rows: 'Rows',
        autoSize: {
          title: 'Auto size',
          tooltip:
            'Height autosize feature, can be set to true|false or an object { maxHeight: 100, minHeight: 50 }',
        },
      },
    },
  },
})
