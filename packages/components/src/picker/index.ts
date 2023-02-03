import { ref, defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Picker as VanPicker, Popup as VanPopup } from 'vant'
import { stylePrefix } from '../__builtins__'
import { FormItem } from '../form-item'
import { useFormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'

import type { Picker as VanPickerProps } from 'vant'

export type PickerProps = VanPickerProps

const BasePicker = observer(
  defineComponent({
    name: 'FBasePicker',
    setup(props, { attrs, emit, slots }) {
      const deepLayoutRef = useFormLayout()
      const show = ref(false)

      return () => {
        const deepLayout = deepLayoutRef.value

        const {
          formItemProps = {},
          popupProps = {},
          pickerProps = {},
          fieldListeners = {},
          popupListeners = {},
          pickerListeners = {},
        } = attrs as any
        const {
          format = (value) => {
            const columns = pickerProps.columns || []
            const selected = columns.find((column) => column.value === value)

            return selected?.[pickerProps.valueKey || 'text']
          },
        } = pickerProps

        return h(
          'div',
          {
            class: {
              [`${stylePrefix}-picker`]: true,
              [`${stylePrefix}-picker--bordered`]: deepLayout.border,
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
                    ...formItemProps,
                  },
                  on: {
                    click: () => {
                      show.value = true
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
                      VanPicker,
                      {
                        attrs: {
                          showToolbar: true,
                          ...pickerProps,
                        },
                        on: {
                          cancel: () => {
                            show.value = false
                          },
                          confirm: ({ value }) => {
                            emit('change', value)
                            show.value = false
                          },
                          ...pickerListeners,
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

export const Picker = connect(
  BasePicker,
  mapProps({
    dataSource: 'pickerProps.columns',
  }),
  mapReadPretty(PreviewText.Picker)
)

export default Picker
