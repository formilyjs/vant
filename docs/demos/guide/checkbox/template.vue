<template>
  <Form class="checkbox" :form="form">
    <Field name="single" title="选项" :component="[Checkbox]" />
    <ArrayField
      name="multiple"
      :dataSource="[
        { label: '选项1', name: 1 },
        { label: '选项2', name: 2 },
      ]"
      :component="[Checkbox.Group]"
    >
      <template v-slot:option="{ option }">
        <div>{{ option.label }}</div>
      </template>
    </ArrayField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { Field, ArrayField } from '@formily/vue'
import { Form, Checkbox, Submit } from '@formily/vant'

const form = createForm()

export default {
  components: { Form, Field, ArrayField, Submit },
  data() {
    return {
      Checkbox,
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
