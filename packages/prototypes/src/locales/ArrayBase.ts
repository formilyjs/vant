import { GlobalRegistry } from '@designable/core'

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    Previews: {
      droppable: '可以拖入组件',
      addIndex: '添加索引',
    },
  },
  'en-US': {
    Previews: {
      droppable: 'Dropable',
      addIndex: 'Add Index',
    },
  },
})

export const ArrayAddition = {
  'zh-CN': {
    title: '添加按钮',
    settings: {
      'x-component-props': {
        method: {
          title: '方式',
          dataSource: ['末尾', '开始'],
          tooltip: '追加至列表方式',
        },
        defaultValue: '默认值',
      },
    },
  },
  'en-US': {
    title: 'Addition',
    settings: {
      'x-component-props': {
        method: {
          title: 'Method',
          dataSource: ['Push', 'Unshift'],
        },
        defaultValue: 'Default value',
      },
    },
  },
}

export const ArrayRemove = {
  'zh-CN': {
    title: '删除按钮',
  },
  'en-US': {
    title: 'Remove',
  },
}

export const ArrayIndex = {
  'zh-CN': {
    title: '索引标识',
  },
  'en-US': {
    title: 'Index',
  },
}
