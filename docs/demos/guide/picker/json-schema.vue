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
import { Form, Picker, Submit } from '@formily/vant'

const { SchemaField } = createSchemaField({
  components: {
    Picker,
  },
})

export default {
  components: { Form, SchemaField, Submit },
  data() {
    const schema = {
      type: 'object',
      title: '城市',
      properties: {
        picker: {
          type: 'string',
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
            fieldListeners: {},
            popupListeners: {},
            pickerListeners: {},
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
