import { createLocales } from '@designable/core'
import { FormItemProps } from './FormItem'

export const Area = createLocales(FormItemProps, {
  'zh-CN': {
    title: '省市区选择',
    settings: {
      'x-component-props': {
        areaProps: {
          title: '标题',
          confirmButtonText: '确认按钮文字',
          cancelButtonText: '取消按钮文字',
          areaList: {
            title: 'Area数据源',
            tooltip: `格式：{
              province_list: {
                110000: 'Beijing',
                330000: 'Zhejiang Province',
              },
              city_list: {
                110100: 'Beijing City',
                330100: 'Hangzhou',
              },
              county_list: {
                110101: 'Dongcheng District',
                110102: 'Xicheng District',
                // ....
              }
            }`,
          },
        },
        formItemProps: {
          placeholder: '占位提示',
          format: {
            title: '格式',
            tooltip: '显示渲染函数，格式：(areaCodes)=>string',
          },
        },
      },
    },
  },
  'en-US': {
    title: 'Area',
    settings: {
      'x-component-props': {
        areaProps: {
          title: 'Title',
          confirmButtonText: 'Confirm button text',
          cancelButtonText: 'Cancel button text',
          areaList: {
            title: 'Area data',
            tooltip: `Formatter：{
              province_list: {
                110000: 'Beijing',
                330000: 'Zhejiang Province',
              },
              city_list: {
                110100: 'Beijing City',
                330100: 'Hangzhou',
              },
              county_list: {
                110101: 'Dongcheng District',
                110102: 'Xicheng District',
                // ....
              }
            }`,
          },
        },
        formItemProps: {
          placeholder: 'Placeholder',
          format: {
            title: 'Format',
            tooltip: 'Render function, Formatter: (areaCodes)=> string',
          },
        },
      },
    },
  },
})
