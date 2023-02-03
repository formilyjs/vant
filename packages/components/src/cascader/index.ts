import { ref, defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Cascader as VanCascader } from 'vant'
import { stylePrefix } from '../__builtins__'
import { Popup as VanPopup } from 'vant'
import { FormItem } from '../form-item'
import { useFormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'

import type { Cascader as VanCascaderProps } from 'vant'

export type CascaderProps = VanCascaderProps

const BaseCascader = observer(
  defineComponent({
    name: 'FBaseCascader',
    setup(props, { attrs, emit, slots }) {
      const deepLayoutRef = useFormLayout()
      const show = ref(false)

      return () => {
        const deepLayout = deepLayoutRef.value

        const {
          formItemProps = {},
          popupProps = {},
          cascaderProps = {},
          fieldListeners = {},
          popupListeners = {},
          cascaderListeners = {},
        } = attrs as any
        const {
          format = (value) => {
            if (value?.length) {
              const texts = []
              const fieldNames = cascaderProps.fieldNames || {}
              let options = cascaderProps.options || []
              for (const item of value) {
                let option
                if (
                  (option = options.find((option) => option.value === item))
                ) {
                  texts.push(option[fieldNames.text || 'text'])
                  options = option.children || []
                } else {
                  return texts.join(' / ')
                }
              }
              return texts.join(' / ')
            }
            return value
          },
        } = formItemProps

        return h(
          'div',
          {
            class: {
              [`${stylePrefix}-cascader`]: true,
              [`${stylePrefix}-cascader--bordered`]: deepLayout.border,
            },
          },
          {
            default: () => [
              h(
                FormItem,
                {
                  attrs: {
                    value: format ? format(attrs.value) : attrs.value,
                    readonly: true,
                    clickable: true,
                    disabled: attrs.disabled,
                    ...formItemProps,
                  },
                  on: {
                    click: () => {
                      !attrs.disabled && (show.value = true)
                    },
                    ...fieldListeners,
                  },
                },
                slots
              ),
              h(
                VanPopup,
                {
                  attrs: {
                    value: show.value,
                    round: true,
                    position: 'bottom',
                    ...popupProps,
                  },
                  on: {
                    input: (val) => {
                      show.value = val
                    },
                    ...popupListeners,
                  },
                },
                {
                  default: () => [
                    h(
                      VanCascader,
                      {
                        attrs: {
                          ...cascaderProps,
                        },
                        on: {
                          close: () => {
                            show.value = false
                          },
                          finish: ({ selectedOptions }) => {
                            emit(
                              'change',
                              selectedOptions.map((option) => option.value)
                            )
                            show.value = false
                          },
                          ...cascaderListeners,
                        },
                      },
                      {}
                    ),
                  ],
                }
              ),
            ],
          }
        )
      }
    },
  })
)

export const Cascader = connect(
  BaseCascader,
  mapProps({
    dataSource: 'cascaderProps.options',
  }),
  mapReadPretty(PreviewText.Cascader)
)

export default Cascader
