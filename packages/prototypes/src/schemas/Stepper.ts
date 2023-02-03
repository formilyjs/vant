import type { ISchema } from '@formily/vue'

export const Stepper: ISchema = {
  type: 'object',
  properties: {
    inputWidth: {
      type: 'string',
      default: '32px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    buttonSize: {
      type: 'string',
      default: '28px',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    min: {
      type: 'number',
      default: 0,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
    },
    max: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
    },
    integer: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    decimalLength: {
      type: 'number',
      default: 0,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        min: 0,
      },
      'x-reactions': (field) => {
        field.visible = !field.form?.values?.['x-component-props']?.integer
      },
    },
    step: {
      type: 'number',
      default: 1,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
      'x-reactions': (field) => {
        const integer = field.form?.values?.['x-component-props']?.integer
        const decimalLength =
          field.form?.values?.['x-component-props']?.decimalLength
        field.componentProps.min =
          integer === true || decimalLength === 0
            ? 1
            : 1 / Math.pow(10, decimalLength)
        field.componentProps.step =
          integer === true || decimalLength === 0
            ? 1
            : 1 / Math.pow(10, decimalLength)
      },
    },
    theme: {
      type: 'string',
      default: null,
      enum: ['round', null],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        allowClaer: true,
      },
    },
  },
}
