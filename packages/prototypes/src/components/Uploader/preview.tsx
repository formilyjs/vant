import { Uploader as FormilyUpload } from '@formily/vant'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Uploader = composeExport(FormilyUpload, {
  Behavior: createBehavior({
    name: 'Upload',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Uploader',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Uploader),
    },
    designerLocales: AllLocales.Uploader,
  }),

  Resource: createResource({
    icon: 'UploadSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'Array<object>',
          title: '上传',
          'x-decorator': 'FormItem',
          'x-component': 'Uploader',
          'x-component-props': {
            uploadText: '上传',
          },
        },
      },
    ],
  }),
})
