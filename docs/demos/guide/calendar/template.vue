<template>
  <Form :form="form">
    <Field
      name="calendar"
      title="日历"
      :component="[
        Calendar,
        {
          formItemProps: {
            placeholder: '选择日历',
            format: (date) =>
              date && `${date.getMonth() + 1}/${date.getDate()}`,
          },
          calendarProps: {},
          fieldListeners: {},
          calendarListeners: {},
        },
      ]"
    />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { Field } from '@formily/vue'
import { Calendar, Submit, Form } from '@formily/vant'

const form = createForm()

export default {
  components: { Form, Field, Submit },
  data() {
    return {
      Calendar,
      form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
