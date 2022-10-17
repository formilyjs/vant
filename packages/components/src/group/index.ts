import { h } from '@formily/vue'
import type { CellGroup as VanCellGroupProps } from 'vant'
import { CellGroup as VanCellGroup } from 'vant'
import { defineComponent } from 'vue-demi'

export type CellGroupProps = VanCellGroupProps

export const Group = defineComponent<CellGroupProps>({
  name: 'FCellGroup',
  setup(props, { attrs, slots }) {
    return () => h(VanCellGroup, { props: { inset: true, ...attrs } }, slots)
  },
})

export default Group
