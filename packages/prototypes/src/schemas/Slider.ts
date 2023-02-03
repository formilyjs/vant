import { GlobalRegistry } from '@designable/core'
import type { ISchema } from '@formily/vue'

export const Slider: ISchema = {
  type: 'object',
  properties: {
    min: {
      type: 'number',
      default: 0,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
    },
    max: {
      type: 'number',
      default: 100,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
    },
    step: {
      type: 'number',
      default: 1,
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        min: 1,
      },
    },
    'bar-height': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    'button-size': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['px'],
      },
    },
    'active-color': {
      type: 'string|boolean|number',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {},
    },
    'inactive-color': {
      type: 'string|boolean|number',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {},
    },
    // range: {
    //   title: GlobalRegistry.getDesignerMessage('settings.sliderRange'),
    //   type: 'boolean',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Switch',
    // },
    // vertical: {
    //   type: 'boolean',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Switch',
    // },
  },
}
