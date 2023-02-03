import { ref, defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Popup as VanPopup, Area as VanArea } from 'vant'
import { stylePrefix } from '../__builtins__'
import { FormItem } from '../form-item'
import { useFormLayout } from '../form-layout'
import { PreviewText } from '../preview-text'

const IndexKey = ['province_list', 'city_list', 'county_list']

const BaseArea = observer(
  defineComponent({
    name: 'FArea',
    setup(props, { attrs, emit, slots }) {
      const deepLayoutRef = useFormLayout()
      const show = ref(false)

      return () => {
        const deepLayout = deepLayoutRef.value

        const {
          formItemProps = {},
          popupProps = {},
          areaProps = {},
          fieldListeners = {},
          popupListeners = {},
          areaListeners = {},
        } = attrs as any
        const {
          format = (value) => {
            if (value?.length) {
              const texts = []
              const areaList = Object.assign(
                {
                  province_list: {},
                  city_list: {},
                  county_list: {},
                },
                areaProps.areaList
              )

              for (const [index, codeVal] of value.entries()) {
                let option
                if (
                  (option = Object.entries(areaList[IndexKey[index]]).find(
                    ([code]) => code === codeVal
                  ))
                ) {
                  texts.push(option[1])
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
              [`${stylePrefix}-area`]: true,
              [`${stylePrefix}-area--bordered`]: deepLayout.border,
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
                      VanArea,
                      {
                        attrs: {
                          ...areaProps,
                        },
                        on: {
                          cancel: () => {
                            show.value = false
                          },
                          confirm: (val) => {
                            emit(
                              'change',
                              val.map((item) => item.code)
                            )
                            show.value = false
                          },
                          ...areaListeners,
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

export const Area = connect(
  BaseArea,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Area)
)

export default Area
