import { ref, defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Calendar as VanCalendar } from 'vant'
import { FormItem } from '../form-item'
import { PreviewText } from '../preview-text'

import type { Calendar as VanCalendarProps } from 'vant'

export type CalendarProps = VanCalendarProps

const BaseCalendar = observer(
  defineComponent({
    name: 'FBaseCalendar',
    setup(props, { attrs, emit, slots }) {
      const show = ref(false)

      return () => {
        const {
          formItemProps = {},
          calendarProps = {},
          fieldListeners = {},
          calendarListeners = {},
        } = attrs as any
        const { format } = formItemProps

        // minDate/maxDate/defaultValue 置换 string/number 至 Date 类型
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

        if ('defaultValue' in calendarProps) {
          if (Array.isArray(calendarProps.defaultValue)) {
            calendarProps.defaultValue = calendarProps.defaultValue.map(
              (value) => {
                if (typeof value === 'string' || typeof value === 'number') {
                  return new Date(value)
                }
                return value
              }
            )
          } else if (
            typeof calendarProps.defaultValue === 'string' ||
            typeof calendarProps.defaultValue === 'number'
          ) {
            calendarProps.minDate = new Date(calendarProps.defaultValue)
          }
        }

        return h(
          'div',
          {},
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
