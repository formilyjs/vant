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
import { Form, Calendar, Submit } from '@formily/vant'

const { SchemaField } = createSchemaField({
  components: {
    Calendar,
  },
})

export default {
  components: { Form, SchemaField, Submit },
  data() {
    const schema = {
      type: 'object',
      properties: {
        calendar: {
          type: 'string',
          title: '日历',
          'x-component': 'Calendar',
          'x-component-props': {
            formItemProps: {
              placeholder: '选择日历',
              format: (date) =>
                date && `${date.getMonth() + 1}/${date.getDate()}`,
            },
            calendarProps: {},
            fieldListeners: {},
            calendarListeners: {},
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
