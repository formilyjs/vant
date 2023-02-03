import { ref, defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Calendar as VanCalendar } from 'vant'
import { stylePrefix } from '../__builtins__'
import { FormItem } from '../form-item'
import { useFormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'

import type { Calendar as VanCalendarProps } from 'vant'

export type CalendarProps = VanCalendarProps

const BaseCalendar = observer(
  defineComponent({
    name: 'FBaseCalendar',
    setup(props, { attrs, emit, slots }) {
      const deepLayoutRef = useFormLayout()
      const show = ref(false)

      return () => {
        const deepLayout = deepLayoutRef.value

        const {
          formItemProps = {},
          calendarProps = {},
          fieldListeners = {},
          calendarListeners = {},
        } = attrs as any
        const {
          format = (date) =>
            date &&
            `${date.getFullYear()}/${(date.getMonth() + 1)
              .toString()
              .padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`,
        } = formItemProps

        // minDate/maxDate/defaultDate 置换 string/number 至 Date 类型
        // 注意字段时间格式兼容问题
        if (
          'minDate' in calendarProps &&
          (typeof calendarProps.minDate === 'string' ||
            typeof calendarProps.minDate === 'number')
        ) {
          calendarProps.minDate = new Date(calendarProps.minDate)
        }
        if (
          'maxDate' in calendarProps &&
          (typeof calendarProps.maxDate === 'string' ||
            typeof calendarProps.maxDate === 'number')
        ) {
          calendarProps.maxDate = new Date(calendarProps.maxDate)
        }

        if ('defaultDate' in calendarProps) {
          if (Array.isArray(calendarProps.defaultDate)) {
            calendarProps.defaultDate = calendarProps.defaultDate.map(
              (value) => {
                if (typeof value === 'string' || typeof value === 'number') {
                  return new Date(value)
                }
                return value
              }
            )
          } else if (
            typeof calendarProps.defaultDate === 'string' ||
            typeof calendarProps.defaultDate === 'number'
          ) {
            calendarProps.defaultDate = new Date(calendarProps.defaultDate)
          }
        }

        return h(
          'div',
          {
            class: {
              [`${stylePrefix}-calendar`]: true,
              [`${stylePrefix}-calendar--bordered`]: deepLayout.border,
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
                VanCalendar,
                {
                  attrs: {
                    value: show.value,
                    ...calendarProps,
                  },
                  on: {
                    input: (val) => {
                      show.value = val
                    },
                    confirm: (val) => {
                      emit('change', val)
                      show.value = false
                    },
                  },
                  ...calendarListeners,
                },
                {}
              ),
            ],
          }
        )
      }
    },
  })
)

export const Calendar = connect(
  BaseCalendar,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Calendar)
)

export default Calendar
