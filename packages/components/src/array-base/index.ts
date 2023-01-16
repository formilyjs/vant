import {
  defineComponent,
  provide,
  InjectionKey,
  Ref,
  inject,
  toRefs,
  ref,
  onBeforeUnmount,
  PropType,
} from 'vue-demi'
import { isValid, uid, clone } from '@formily/shared'
import { ArrayField } from '@formily/core'
import { Fragment, useField, useFieldSchema, h } from '@formily/vue'
import { Button, Icon } from 'vant'
import { composeExport, stylePrefix } from '../__builtins__'

import type { Button as ButtonProps } from 'vant'
import type { Schema } from '@formily/json-schema'

export interface IArrayBaseAdditionProps extends ButtonProps {
  title?: string
  method?: 'push' | 'unshift'
  defaultValue?: any
}

export type ArrayBaseMixins = {
  Addition?: typeof ArrayBaseAddition
  Remove?: typeof ArrayBaseRemove
  Index?: typeof ArrayBaseIndex
  useArray?: typeof useArray
  useIndex?: typeof useIndex
  useRecord?: typeof useRecord
}

export interface IArrayBaseProps {
  disabled?: boolean
  keyMap?: WeakMap<Object, String> | String[] | null
}

export interface IArrayBaseItemProps {
  index: number
  record: any
}

export interface IArrayBaseContext {
  field: Ref<ArrayField>
  schema: Ref<Schema>
  props: IArrayBaseProps
  listeners: {
    [key in string]?: Function
  }
  keyMap?: WeakMap<Object, String> | String[] | null
}

const ArrayBaseSymbol: InjectionKey<IArrayBaseContext> =
  Symbol('ArrayBaseContext')
const ItemSymbol: InjectionKey<IArrayBaseItemProps> = Symbol('ItemContext')

const useArray = () => {
  return inject(ArrayBaseSymbol, null)
}

const useIndex = (index?: number) => {
  const { index: indexRef } = toRefs(inject(ItemSymbol))
  return indexRef ?? ref(index)
}

const useRecord = (record?: number) => {
  const { record: recordRef } = toRefs(inject(ItemSymbol))
  return recordRef ?? ref(record)
}

const isObjectValue = (schema: Schema) => {
  if (Array.isArray(schema?.items)) return isObjectValue(schema.items[0])

  if (schema?.items?.type === 'array' || schema?.items?.type === 'object') {
    return true
  }
  return false
}

const useKey = (schema: Schema) => {
  const isObject = isObjectValue(schema)
  let keyMap: WeakMap<Object, String> | String[] | null = null

  if (isObject) {
    keyMap = new WeakMap()
  } else {
    keyMap = []
  }

  onBeforeUnmount(() => {
    keyMap = null
  })

  return {
    keyMap,
    getKey: (record: any, index?: number) => {
      if (keyMap instanceof WeakMap) {
        if (!keyMap.has(record)) {
          keyMap.set(record, uid())
        }
        return `${keyMap.get(record)}-${index}`
      }

      if (!keyMap[index]) {
        keyMap[index] = uid()
      }

      return `${keyMap[index]}-${index}`
    },
  }
}

const getDefaultValue = (defaultValue: any, schema: Schema): any => {
  if (isValid(defaultValue)) return clone(defaultValue)
  if (Array.isArray(schema?.items))
    return getDefaultValue(defaultValue, schema.items[0])
  if (schema?.items?.type === 'array') return []
  if (schema?.items?.type === 'boolean') return true
  if (schema?.items?.type === 'date') return ''
  if (schema?.items?.type === 'datetime') return ''
  if (schema?.items?.type === 'number') return 0
  if (schema?.items?.type === 'object') return {}
  if (schema?.items?.type === 'string') return ''
  if (schema?.items?.type === 'void') return ''
  return null
}

const ArrayBaseInner = defineComponent<IArrayBaseProps>({
  name: 'ArrayBase',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    keyMap: {
      type: [WeakMap, Array] as PropType<WeakMap<Object, String> | String[]>,
    },
  },
  setup(props, { slots, listeners }) {
    const field = useField<ArrayField>()
    const schema = useFieldSchema()

    provide(ArrayBaseSymbol, {
      field,
      schema,
      props,
      listeners,
      keyMap: props.keyMap,
    })
    return () => {
      return h(Fragment, {}, slots)
    }
  },
})

const ArrayBaseItem = defineComponent({
  name: 'ArrayBaseItem',
  props: ['index', 'record'],
  setup(props: IArrayBaseItemProps, { slots }) {
    provide(ItemSymbol, props)
    return () => {
      return h(Fragment, {}, slots)
    }
  },
})

const ArrayBaseIndex = defineComponent({
  name: 'ArrayBaseIndex',
  setup(props, { attrs }) {
    const index = useIndex()
    const prefixCls = `${stylePrefix}-array-base`
    return () => {
      return h(
        'span',
        {
          class: `${prefixCls}-index`,
          attrs,
        },
        {
          default: () => [`#${index.value + 1}.`],
        }
      )
    }
  },
})

const ArrayBaseAddition = defineComponent({
  name: 'ArrayBaseAddition',
  props: ['title', 'method', 'defaultValue'],
  setup(props: IArrayBaseAdditionProps, { listeners }) {
    const self = useField()
    const array = useArray()
    const prefixCls = `${stylePrefix}-array-base`
    return () => {
      if (!array) return null
      if (array?.field.value.pattern !== 'editable') return null
      return h(
        Button,
        {
          class: `${prefixCls}-addition`,
          attrs: {
            size: 'small',
            plain: true,
            icon: 'plus',
            ...props,
          },
          on: {
            ...listeners,
            click: (e) => {
              e?.stopPropagation?.()
              e?.preventDefault?.()
              if (array.props?.disabled) return
              const defaultValue = getDefaultValue(
                props.defaultValue,
                array?.schema.value
              )
              if (props.method === 'unshift') {
                array?.field?.value.unshift(defaultValue)
                array.listeners?.add?.(0)
              } else {
                array?.field?.value.push(defaultValue)
                array.listeners?.add?.(array?.field?.value?.value?.length - 1)
              }
              if (listeners.click) {
                listeners.click(e)
              }
            },
          },
        },
        {
          default: () => [props.title || self.value.title],
        }
      )
    }
  },
})

const ArrayBaseRemove = defineComponent({
  name: 'ArrayBaseRemove',
  props: ['name', 'title', 'index'],
  setup(props, { attrs, listeners }) {
    const indexRef = useIndex(props.index)
    const base = useArray()
    const prefixCls = `${stylePrefix}-array-base`
    return () => {
      if (base?.field.value.pattern !== 'editable') return null
      return h(
        Icon,
        {
          class: `${prefixCls}-remove`,
          attrs: {
            name: props.name || 'delete-o',
            ...attrs,
          },
          on: {
            ...listeners,
            click: (e: MouseEvent) => {
              e?.stopPropagation?.()
              e?.preventDefault?.()
              if (Array.isArray(base?.keyMap)) {
                base?.keyMap?.splice(indexRef.value, 1)
              }

              base?.field.value.remove(indexRef.value as number)
              base?.listeners?.remove?.(indexRef.value as number)

              if (listeners.click) {
                listeners.click(e)
              }
            },
          },
        },
        {
          default: () => [props.title],
        }
      )
    }
  },
})

export const ArrayBase = composeExport(ArrayBaseInner, {
  Index: ArrayBaseIndex,
  Item: ArrayBaseItem,
  Addition: ArrayBaseAddition,
  Remove: ArrayBaseRemove,
  useArray: useArray,
  useIndex: useIndex,
  useKey: useKey,
  useRecord: useRecord,
})
