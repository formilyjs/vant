import { h } from '@formily/vue'
import type { CellGroup as VanCellGroupProps } from 'vant'
import { CellGroup as VanCellGroup } from 'vant'
import { defineComponent } from '@vue/composition-api'

export type CellGroupProps = VanCellGroupProps

export const Group = defineComponent<CellGroupProps>({
  name: 'FCellGroup',
  setup(props, { slots }) {
    return () => h(VanCellGroup, { props: { inset: true, ...props } }, slots)
  },
})

export default Group
