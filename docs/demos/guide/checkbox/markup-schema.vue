<template>
  <Form class="checkbox" :form="form">
    <SchemaField>
      <SchemaBooleanField name="single" title="选项" x-component="Checkbox" />
      <SchemaArrayField
        name="multiple"
        :enum="[
          { label: '选项1', name: 1 },
          { label: '选项2', name: 2 },
        ]"
        x-component="Checkbox.Group"
      />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, Checkbox, Submit } from '@formily/vant'

const form = createForm()
const fields = createSchemaField({
  components: {
    Checkbox,
  },
})

export default {
  components: { Form, ...fields, Submit },
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

<style lang="scss" scoped>
.checkbox {
  ::v-deep {
    .van-checkbox {
      margin: 0 0 8px;
    }
  }
}
</style>
