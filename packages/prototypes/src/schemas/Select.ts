import type { ISchema } from '@formily/vue'

export const Select: ISchema = {
  type: 'object',
  properties: {
    size: {
      default: 'default',
      type: 'string',
      enum: [
        {
          label: 'Large',
          value: 'large',
        },
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Default',
          value: 'default',
        },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    pickerProps: {
      type: 'object',
      properties: {
        columns: {
          type: 'array',
          'x-reactions': [
            {
              dependencies: ['enum'],
              fulfill: {
                state: {
                  value:
                    '{{$self.value = $deps[0].map((item) => ({value: item.value, text: item.label}))}}',
                },
              },
            },
          ],
        },
      },
    },
    formItemProps: {
      type: 'object',
      properties: {
        placeholder: {
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            size: 'small',
          },
        },
      },
    },
    clearable: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
