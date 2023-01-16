import { defineComponent } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { Uploader as VanUploader } from 'vant'
import { transformComponent } from '../__builtins__'
import { PreviewText } from '../preview-text'

import type { Uploader as VanUploaderProps } from 'vant'

export type UploaderProps = VanUploaderProps

const TransformVanUploader = transformComponent<UploaderProps>(VanUploader, {
  change: 'input',
})

const BaseUploader = observer(
  defineComponent({
    name: 'FBaseUploader',
    setup(props, { attrs, slots, listeners }) {
      return () => {
        return h(
          TransformVanUploader,
          {
            attrs: {
              ...attrs,
              fileList: attrs.value,
            },
            on: listeners,
          },
          slots
        )
      }
    },
  })
)

export const Uploader = connect(
  BaseUploader,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Uploader)
)

export default Uploader
