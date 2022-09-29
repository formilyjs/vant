import { defineComponent } from 'vue-demi'
import { ArrayField } from '@formily/core'
import { useField, useFieldSchema, RecursionField, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { ISchema } from '@formily/json-schema'
import { stylePrefix } from '../__builtins__/configs'
import { ArrayBase } from '../array-base'
import { composeExport } from '../__builtins__/shared'
import { CellGroup } from 'vant'

const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

export interface IArrayItemsItemProps {
  type?: 'card' | 'divide'
}

const ArrayItemsInner = observer(
  defineComponent({
    name: 'FArrayItems',
    setup(props, { attrs }) {
      const fieldRef = useField<ArrayField>()
      const schemaRef = useFieldSchema()

      const prefixCls = `${stylePrefix}-array-items`
      const { getKey, keyMap } = ArrayBase.useKey(schemaRef.value)

      return () => {
        const field = fieldRef.value
        const schema = schemaRef.value
        const dataSource = Array.isArray(field.value) ? field.value.slice() : []

        const renderItems = () => {
          const items = dataSource?.map((item, index) => {
            const items = Array.isArray(schema.items)
              ? schema.items[index] || schema.items[0]
              : schema.items
            const key = getKey(item, index)
            return h(
              ArrayBase.Item,
              {
                key,
                props: {
                  index,
                  record: item,
                },
              },
              {
                default: () =>
                  h(
                    RecursionField,
                    {
                      props: {
                        schema: items,
                        name: index,
                      },
                    },
                    {}
                  ),
              }
            )
          })

          return h('div', {}, { default: () => items })
        }
        const renderAddition = () => {
          return schema.reduceProperties((addition, schema) => {
            if (isAdditionComponent(schema)) {
              return h(
                RecursionField,
                {
                  props: {
                    schema,
                    name: 'addition',
                  },
                },
                {}
              )
            }
            return addition
          }, null)
        }

        return h(
          ArrayBase,
          {
            props: {
              keyMap,
            },
          },
          {
            default: () =>
              h(
                'div',
                {
                  class: [prefixCls],
                  on: {
                    change: () => {},
                  },
                },
                {
                  default: () => [renderItems(), renderAddition()],
                }
              ),
          }
        )
      }
    },
  })
)

const ArrayItemsItem = defineComponent<IArrayItemsItemProps>({
  name: 'FArrayItemsItem',
  props: ['type'],
  setup(props, { attrs, slots }) {
    const prefixCls = `${stylePrefix}-array-items`

    return () =>
      h(
        CellGroup,
        {
          class: [`${prefixCls}-${props.type || 'card'}`],
          attrs: {
            inset: true,
            ...attrs,
          },
          on: {
            change: () => {},
          },
        },
        slots
      )
  },
})

export const ArrayItems = composeExport(ArrayItemsInner, {
  Item: ArrayItemsItem,
  Index: ArrayBase.Index,
  Addition: ArrayBase.Addition,
  Remove: ArrayBase.Remove,
  useArray: ArrayBase.useArray,
  useIndex: ArrayBase.useIndex,
  useRecord: ArrayBase.useRecord,
})

export default ArrayItems
