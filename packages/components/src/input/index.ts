import { defineComponent } from 'vue-demi'
import { isVoidField } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Field as VanInput } from 'vant'
import {
  transformComponent,
  resolveComponent,
  stylePrefix,
} from '../__builtins__'
import { useFormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'

import type { Component } from 'vue'

export type InputProps = {
  required?: boolean
  label?: string | Component
  colon?: boolean
  labelWidth?: number | string
  labelAlign?: 'left' | 'right'
  inputAlign?: 'left' | 'right'
  size?: 'large'
  center?: boolean
  leftIcon?: string
  rightIcon?: string
  iconPrefix?: string
  extra?: string
  border?: boolean
}

const TransformVanInput = transformComponent<InputProps>(VanInput, {
  change: 'input',
})

export const BaseInput = observer(
  defineComponent<InputProps>({
    name: 'FBaseInput',
    props: {
      required: {},
      label: {},
      colon: {},
      labelWidth: {},
      labelAlign: {},
      inputAlign: {},
      size: {},
      center: {},
      isLink: {},
      rightIcon: {},
      iconPrefix: {},
      extra: {},
      border: {},
    },
    setup(props, { attrs, slots, listeners }) {
      const deepLayoutRef = useFormLayout()

      return () => {
        const deepLayout = deepLayoutRef.value
        const {
          label,
          required,
          colon = deepLayout.colon ?? false,
          labelWidth = deepLayout.labelWidth,
          labelAlign = deepLayout.labelAlign ?? 'left',
          inputAlign = deepLayout.inputAlign ?? 'left',
          size = deepLayout.size,
          border = deepLayout.border,
          center,
          leftIcon,
          rightIcon,
          iconPrefix,
          extra,
        } = props
        return h(
          TransformVanInput,
          {
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

export const inputValidate = mapProps<any>(
  { validateStatus: true, title: 'label', required: true },
  (props, field) => {
    if (isVoidField(field)) return props
    if (!field) return props
    const takeMessage = () => {
      const split = (messages: any[]) => {
        return messages.reduce((buf, text, index) => {
          if (!text) return buf
          return index < messages.length - 1
            ? buf.concat([text, ', '])
            : buf.concat([text])
        }, [])
      }

      if (field.validating) return
      if (props.feedbackText) return props.feedbackText
      if (field.selfErrors.length) return split(field.selfErrors)
      if (field.selfWarnings.length) return split(field.selfWarnings)
      if (field.selfSuccesses.length) return split(field.selfSuccesses)
    }
    const errorMessages = takeMessage()
    return {
      errorMessage: resolveComponent(
        Array.isArray(errorMessages) ? errorMessages.join('') : errorMessages
      ),
      extra: props.extra || field.description,
    }
  },
  (props, field) => {
    if (isVoidField(field)) return props
    if (!field) return props
    return {
      feedbackStatus:
        field.validateStatus === 'validating'
          ? 'pending'
          : (Array.isArray(field.decorator) &&
              field.decorator[1]?.feedbackStatus) ||
            field.validateStatus,
    }
  },
  (props, field) => {
    if (isVoidField(field)) return props

    if (!field) return props
    let asterisk = false
    if (field.required && field.pattern !== 'readPretty') {
      asterisk = true
    }
    if ('asterisk' in props) {
      asterisk = props.asterisk
    }

    return {
      asterisk,
    }
  }
)

export const Input = connect(
  BaseInput,
  mapReadPretty(PreviewText.Input),
  inputValidate
)

export default Input
