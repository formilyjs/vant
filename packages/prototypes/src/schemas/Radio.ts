import type { ISchema } from '@formily/vue'

export const Radio: ISchema & { Group?: ISchema } = {
  type: 'object',
  properties: {},
}

Radio.Group = {
  type: 'object',
  properties: {
    direction: {
      default: 'horizontal',
      type: 'string',
      enum: [
        {
          label: '水平',
          value: 'horizontal',
        },
        {
          label: '垂直',
          value: 'vertical',
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        size: 'small',
      },
    },
  },
}
