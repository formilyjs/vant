<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log"
      >提交</Submit
    >
  </FormProvider>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import {
  FormItem,
  Submit,
  Input,
  ArrayItems,
  DatetimePicker,
  Picker,
  Group,
} from '@formily/vant'
import { Button } from 'vant'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayItems,
    DatetimePicker,
    Picker,
    Group,
  },
})

export default {
  components: {
    FormProvider,
    Button,
    Submit,
    ...SchemaField,
  },

  data() {
    const form = createForm()
    const schema = {
      type: 'object',
      properties: {
        string_array: {
          type: 'array',
          'x-component': 'ArrayItems',
          'x-decorator': 'FormItem',
          title: '字符串数组',
          items: {
            type: 'void',
            properties: {
              input: {
                type: 'string',
                'x-component': 'Input',
                'x-component-props': { placeholder: '请输入' },
              },
              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
              },
            },
          },
          properties: {
            add: {
              type: 'void',
              title: '添加条目',
              'x-component': 'ArrayItems.Addition',
            },
          },
        },
        array: {
          type: 'array',
          'x-component': 'ArrayItems',
          'x-decorator': 'FormItem',
          title: '对象数组',
          items: {
            type: 'object',
            properties: {
              space: {
                type: 'void',
                properties: {
                  date: {
                    type: 'string',
                    title: '日期',
                    'x-component': 'DatetimePicker',
                  },
                  input: {
                    type: 'string',
                    title: '输入框',
                    'x-component': 'Input',
                    'x-decorator': 'FormItem',
                  },
                  select: {
                    type: 'string',
                    title: '下拉框',
                    'x-component': 'Picker',
                    'x-component-props': {
                      formItemProps: {
                        placeholder: '选择城市',
                      },
                      popupProps: {},
                      pickerProps: {
                        columns: [
                          '杭州',
                          '宁波',
                          '温州',
                          '绍兴',
                          '湖州',
                          '嘉兴',
                          '金华',
                          '衢州',
                        ],
                      },
                    },
                  },
                  remove: {
                    type: 'void',
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayItems.Remove',
                  },
                },
              },
            },
          },
          properties: {
            add: {
              type: 'void',
              title: '添加条目',
              'x-component': 'ArrayItems.Addition',
            },
          },
        },
        array2: {
          type: 'array',
          'x-component': 'ArrayItems',
          'x-decorator': 'FormItem',
          title: '对象数组',
          items: {
            type: 'object',
            'x-decorator': 'ArrayItems.Item',
            properties: {
              date: {
                type: 'string',
                title: '日期',
                'x-component': 'DatetimePicker',
              },
              input: {
                type: 'string',
                title: '输入框',
                required: true,
                'x-component': 'Input',
              },
              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
              },
            },
          },
          properties: {
            add: {
              type: 'void',
              title: '添加条目',
              'x-component': 'ArrayItems.Addition',
            },
          },
        },
      },
    }

    return {
      form,
      schema,
    }
  },
  methods: {
    log(values) {
      console.log(values)
    },
  },
}
</script>

<style lang="scss" scoped></style>
