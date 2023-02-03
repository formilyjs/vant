import type { ISchema } from '@formily/vue'

export const FormLayout: ISchema = {
  type: 'object',
  properties: {
    labelWidth: {
      type: 'string|number',
      default: '6.2em',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px', 'em'],
      },
    },
    labelAlign: {
      type: 'string',
      enum: ['left', 'right', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      // 'x-reactions': "{{(field) => { !field.value && field.setValue('right') }}}",
    },
    wrapperAlign: {
      type: 'string',
      enum: ['left', 'right', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      // 'x-reactions': "{{(field) => { !field.value && field.setValue('left') }}}",
    },
    colon: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      // 'x-reactions': '{{(field) => { !field.value && field.setValue(true) }}}',
    },
    size: {
      type: 'string',
      enum: ['large', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      // 'x-reactions': "{{(field) => { !field.value && field.setValue('default') }}}",
    },
    shallow: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      // 'x-reactions': '{{(field) => { !field.value && field.setValue(true) }}}',
    },
    border: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      // 'x-reactions': '{{(field) => { !field.value && field.setValue(true) }}}',
    },
  },
}
