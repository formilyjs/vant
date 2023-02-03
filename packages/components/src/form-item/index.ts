import { defineComponent, ref, provide } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, h } from '@formily/vue'
import { Field as VanFormItem } from 'vant'
import { stylePrefix, resolveComponent } from '../__builtins__'
import { useFormLayout, FormLayoutShallowContext } from '../form-layout'
import { inputValidate } from '../input'

import type { Component } from 'vue'

export type FormItemProps = {
  className?: string
  required?: boolean
  label?: string | Component
  colon?: boolean
  labelWidth?: number | string
  labelAlign?: 'left' | 'right'
  inputAlign?: 'left' | 'right'
  size?: 'large'
  center?: boolean
  isLink?: boolean
  arrowDirection?: 'left' | 'right' | 'up' | 'down'
  leftIcon?: string
  rightIcon?: string
  iconPrefix?: string
  extra?: string
  border?: boolean
}

export const BaseFormItem = observer(
  defineComponent<FormItemProps>({
    name: 'FBaseFormItem',
    props: {
      className: {},
      required: {},
      label: {},
      colon: {},
      labelWidth: {},
      labelAlign: {},
      inputAlign: {},
      size: {},
      center: {},
      isLink: {},
      arrowDirection: {},
      leftIcon: {},
      rightIcon: {},
      iconPrefix: {},
      extra: {},
      border: {},
    },
    setup(props, { attrs, slots, listeners }) {
      const deepLayoutRef = useFormLayout()

      provide(FormLayoutShallowContext, ref(null))

      return () => {
        const deepLayout = deepLayoutRef.value
        const {
          label,
          required,
          colon = deepLayout.colon ?? true,
          labelWidth = deepLayout.labelWidth,
          labelAlign = deepLayout.labelAlign ?? 'right',
          inputAlign = deepLayout.inputAlign ?? 'left',
          size = deepLayout.size,
          border = deepLayout.border,
          center,
          isLink,
          arrowDirection,
          leftIcon,
          rightIcon,
          iconPrefix,
          extra,
        } = props

        return h(
          VanFormItem,
          {
            class: {
              [`${props.className}`]: !!props.className,
            },
            attrs: {
              ...attrs,
              required,
              colon,
              labelWidth,
              labelAlign,
              inputAlign,
              size,
              border,
              center,
              isLink,
              arrowDirection,
              leftIcon,
              rightIcon,
              iconPrefix,
            },
            on: listeners,
          },
          {
            label: () => resolveComponent(label),
            input: () => slots.default?.(),
            extra: () =>
              extra &&
              h(
                'div',
                { class: `${stylePrefix}-extra` },
                { default: () => [extra] }
              ),
          }
        )
      }
    },
  })
)

export const FormItem = connect(BaseFormItem, inputValidate)

export default FormItem
