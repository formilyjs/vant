<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="输入框"
        x-component="Input"
        :x-component-props="{ placeholder: '请输入' }"
      />
      <SchemaStringField
        name="textarea"
        title="文本框"
        x-component="Input"
        :x-component-props="{
          autosize: true,
          type: 'textarea',
          placeholder: '请输入',
        }"
      />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { Input, Submit } from '@formily/vant'

const form = createForm()
const fields = createSchemaField({
  components: {
    Input,
  },
})

export default {
  components: { FormProvider, ...fields, Submit },
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
