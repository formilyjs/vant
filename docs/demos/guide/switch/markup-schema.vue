<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField name="switch" title="评分" x-component="Switch" />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Switch, FormItem, Submit, Form } from '@formily/vant'

const form = createForm()
const fields = createSchemaField({
  components: {
    Switch,
    FormItem,
  },
})

export default {
  components: { ...fields, Submit, Form },
  data() {
    return {
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
