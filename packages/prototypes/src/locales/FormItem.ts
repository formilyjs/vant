const zhCN = {
  colon: '是否有冒号',
  labelWidth: '标签宽度',
  labelAlign: {
    title: '标签对齐',
    dataSource: ['左对齐', '右对齐', '继承'],
  },
  wrapperAlign: {
    title: '组件对齐',
    dataSource: ['左对齐', '右对齐', '继承'],
  },
  shallow: '是否浅传递',
  border: {
    title: '边框',
    tooltip: '是否显示内边框',
  },
  size: {
    title: '尺寸',
    dataSource: ['大', '默认'],
  },
  center: {
    title: '居中',
    tooltip: '是否使内容垂直居中',
  },
  isLink: {
    title: '展示右侧箭头',
    tooltip: '是否展示右侧箭头并开启点击反馈',
  },
  arrowDirection: '箭头方向',
  leftIcon: {
    title: '左侧图标',
    tooltip: '左侧图标名称或图片链接',
  },
  rightIcon: {
    title: '右侧图标',
    tooltip: '右侧图标名称或图片链接',
  },
  iconPrefix: '图标前缀',
}

const enUS = {
  colon: 'Colon',
  labelWidth: 'Label Width',
  labelAlign: {
    title: 'Label Align',
    dataSource: ['Left', 'Right', 'Inherit'],
  },
  wrapperAlign: {
    title: 'Wrapper Align',
    dataSource: ['Left', 'Right', 'Inherit'],
  },
  shallow: 'Shallow',
  border: {
    title: 'Bordered',
    tooltip: 'Whether to show inner border',
  },
  size: {
    title: 'Size',
    dataSource: ['Large', 'Default'],
  },
  center: {
    title: 'Center',
    tooltip: 'Whether to center content vertically',
  },
  isLink: {
    title: 'Is link',
    tooltip: 'Whether to show link icon',
  },
  arrowDirection: 'Arrow direction',
  leftIcon: {
    title: 'Left icon',
    tooltip: 'Left side icon name',
  },
  rightIcon: {
    title: 'Right icon',
    tooltip: 'Right side icon name',
  },
  iconPrefix: 'Icon prefix',
}

export const FormItem = {
  'zh-CN': {
    settings: {
      'x-component-props': zhCN,
    },
  },
  'en-US': {
    settings: {
      'x-component-props': enUS,
    },
  },
}

export const FormItemProps = {
  'zh-CN': {
    settings: {
      'x-component-props': {
        formItemProps: zhCN,
      },
    },
  },
  'en-US': {
    settings: {
      'x-component-props': {
        formItemProps: enUS,
      },
    },
  },
}

export const FormItemDecoratorProps = {
  'zh-CN': {
    settings: {
      'x-decorator-props': zhCN,
    },
  },
  'en-US': {
    settings: {
      'x-decorator-props': enUS,
    },
  },
}
