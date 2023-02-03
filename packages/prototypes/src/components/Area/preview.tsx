import { Area as FormilyArea } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Area = composeExport(FormilyArea, {
  Behavior: createBehavior({
    name: 'Area',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Area',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Area),
    },
    designerLocales: AllLocales.Area,
  }),
  Resource: createResource({
    icon: 'CascaderSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'Area',
          // 'x-decorator': 'FormItem',
          'x-component': 'Area',
          'x-component-props': {
            areaProps: {
              areaList: {
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
                },
              },
            },
            formItemProps: {
              placeholder: '请选择',
            },
          },
        },
      },
    ],
  }),
})
