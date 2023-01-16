import { defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, h } from '@formily/vue'
import { Field as VanFormItem } from 'vant'
import { stylePrefix } from '../__builtins__'
import { inputValidate } from '../input'

import type { Field as VanFormItemProps } from 'vant'

export type FormItemProps = VanFormItemProps

export const BaseFormItem = observer(
  defineComponent({
    name: 'FBaseFormItem',
    props: {
      label: {},
    },
    setup(props, { attrs, slots, listeners }) {
      return () => {
        return h(
          VanFormItem,
          {
            class: { [`${stylePrefix}-input-asterisk`]: attrs.asterisk },
            attrs: { ...attrs, ...props },
            on: listeners,
          },
          {
            input: () => slots.default?.(),
          }
        )
      }
    },
  })
)

export const FormItem = connect(BaseFormItem, inputValidate)

export default FormItem
