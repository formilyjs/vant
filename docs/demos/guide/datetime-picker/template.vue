<template>
  <Form :form="form">
    <Field
      name="datetimePicker"
      title="时间选择器"
      :component="[
        DatetimePicker,
        {
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
import { DatetimePicker, Submit, Form } from '@formily/vant'

const form = createForm()

export default {
  components: { Form, Field, Submit },
  data() {
    return {
      DatetimePicker,
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
