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
import { Form, DatetimePicker, Submit } from '@formily/vant'

const { SchemaField } = createSchemaField({
  components: {
    DatetimePicker,
  },
})

export default {
  components: { Form, SchemaField, Submit },
  data() {
    const schema = {
      type: 'object',
      properties: {
        datetimePicker: {
          type: 'string',
          title: '时间选择器',
          'x-component': 'DatetimePicker',
          'x-component-props': {
            formItemProps: {
              placeholder: '请选择时间',
            },
            popupProps: {},
            datetimePickerProps: {
              type: 'time',
            },
            fieldListeners: {},
            popupListeners: {},
            datetimePickerListeners: {},
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
