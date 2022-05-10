<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, Rate, Input, Submit, Group } from '@formily/vant'

const { SchemaField } = createSchemaField({
  components: {
    Rate,
    Input,
    Group,
  },
})

export default {
  components: { Form, SchemaField, Submit },
  data() {
    const schema = {
      type: 'object',
      properties: {
        group1: {
          type: 'void',
          'x-decorator': 'Group',
          properties: {
            input: {
              type: 'string',
              title: '输入框',
              'x-component': 'Input',
              'x-component-props': { placeholder: '请输入' },
            },
            textarea: {
              type: 'string',
              title: '文本框',
              'x-component': 'Input',
              'x-component-props': {
                autosize: true,
                type: 'textarea',
                placeholder: '请输入',
              },
            },
          },
        },
        group2: {
          type: 'void',
          'x-decorator': 'Group',
          properties: {
            input1: {
              type: 'string',
              title: '输入框',
              'x-component': 'Input',
              'x-component-props': { placeholder: '请输入' },
            },
            input2: {
              type: 'string',
              title: '输入框',
              'x-component': 'Input',
              'x-component-props': { placeholder: '请输入' },
            },
          },
        },
      },
    }

    const form = createForm()

    return {
      form,
      schema,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
