import { ref, defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { DatetimePicker as VanDatetimePicker, Popup as VanPopup } from 'vant'
import { stylePrefix } from '../__builtins__'
import { FormItem } from '../form-item'
import { useFormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'

import type { DatetimePicker as VanDatetimePickerProps } from 'vant'

export type DatetimePickerProps = VanDatetimePickerProps

const BaseDatetimePicker = observer(
  defineComponent({
    name: 'FBaseDatetimePicker',
    setup(props, { attrs, emit, slots }) {
      const deepLayoutRef = useFormLayout()
      const show = ref(false)

      return () => {
        const deepLayout = deepLayoutRef.value

        const {
          formItemProps = {},
          popupProps = {},
          datetimePickerProps = {},
          fieldListeners = {},
          popupListeners = {},
          datetimePickerListeners = {},
        } = attrs as any

        const {
          format = (type, date) => {
            if (date instanceof Date) {
              switch (type) {
                case 'date':
                  return `${date.getFullYear()}/${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}/${date
                    .getDate()
                    .toString()
                    .padStart(2, '0')}`
                case 'datehour':
                  return `${date.getFullYear()}/${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}/${date
                    .getDate()
                    .toString()
                    .padStart(2, '0')} ${date
                    .getHours()
                    .toString()
                    .padStart(2, '0')}`
                case 'year-month':
                  return `${date.getFullYear()}/${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}`
                case 'month-day':
                  return `${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}/${date
                    .getDate()
                    .toString()
                    .padStart(2, '0')}`
                default:
                  return `${date.getFullYear()}/${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, '0')}/${date
                    .getDate()
                    .toString()
                    .padStart(2, '0')} ${date
                    .getHours()
                    .toString()
                    .padStart(2, '0')}:${date
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}:${date
                    .getSeconds()
                    .toString()
                    .padStart(2, '0')}`
              }
            }
            return date
          },
        } = formItemProps

        // minDate/maxDate/defaultDate 置换 string/number 至 Date 类型
        // 注意字段时间格式兼容问题
        if (
          'minDate' in datetimePickerProps &&
          (typeof datetimePickerProps.minDate === 'string' ||
            typeof datetimePickerProps.minDate === 'number')
        ) {
          datetimePickerProps.minDate = new Date(datetimePickerProps.minDate)
        }
        if (
          'maxDate' in datetimePickerProps &&
          (typeof datetimePickerProps.maxDate === 'string' ||
            typeof datetimePickerProps.maxDate === 'number')
        ) {
          datetimePickerProps.maxDate = new Date(datetimePickerProps.maxDate)
        }

        return h(
          'div',
          {
            class: {
              [`${stylePrefix}-datetime-picker`]: true,
              [`${stylePrefix}-datetime-picker--bordered`]: deepLayout.border,
            },
          },
          {
            default: () => [
              h(
                FormItem,
                {
                  attrs: {
                    value: format
                      ? format(datetimePickerProps.type, attrs.value)
                      : attrs.value,
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
                      VanDatetimePicker,
                      {
                        attrs: {
                          showToolbar: true,
                          ...datetimePickerProps,
                        },
                        on: {
                          cancel: () => {
                            show.value = false
                          },
                          confirm: (val) => {
                            emit('change', val)
                            show.value = false
                          },
                          ...datetimePickerListeners,
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

export const DatetimePicker = connect(
  BaseDatetimePicker,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.DatetimePicker)
)

export default DatetimePicker
