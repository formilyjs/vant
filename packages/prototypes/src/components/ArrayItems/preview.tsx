import { CellGroup } from 'vant'
import { TreeNode, createResource } from '@designable/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  useNodeIdProps,
} from '@formily/antdv-designable'
import { ArrayBase } from '@formily/vant'
import { observer } from '@formily/reactive-vue'
import cls from 'classnames'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { defineComponent } from 'vue-demi'
import { uid } from '@designable/shared'
import {
  hasNodeByComponentPath,
  queryNodesByComponentPath,
  createEnsureTypeItemsNode,
  findNodeByComponentPath,
  createNodeId,
} from '../../shared'
import { useDropTemplate } from '../../hooks'
import { LoadTemplate } from '../../common/LoadTemplate'
import { createArrayBehavior } from '../ArrayBase'
// import './styles.less'

const ensureObjectItemsNode = createEnsureTypeItemsNode('object')

const isArrayCardsOperation = (name: string) =>
  name === 'ArrayItems.Remove' ||
  name === 'ArrayItems.MoveDown' ||
  name === 'ArrayItems.MoveUp'

export const ArrayItems = composeExport(
  observer(
    defineComponent({
      setup(props, { slots }) {
        const nodeRef = useTreeNode()
        const nodeIdRef = useNodeIdProps()

        const designerRef = useDropTemplate('ArrayItems', (source) => {
          // const indexNode = new TreeNode({
          //   componentName: nodeRef.value.componentName,
          //   props: {
          //     type: 'void',
          //     'x-component': 'ArrayItems.Index',
          //   },
          // })
          const additionNode = new TreeNode({
            componentName: nodeRef.value.componentName,
            props: {
              type: 'void',
              title: 'Addition',
              'x-component': 'ArrayItems.Addition',
            },
          })
          const removeNode = new TreeNode({
            componentName: nodeRef.value.componentName,
            props: {
              type: 'void',
              title: 'Addition',
              'x-component': 'ArrayItems.Remove',
            },
          })
          // const moveDownNode = new TreeNode({
          //   componentName: nodeRef.value.componentName,
          //   props: {
          //     type: 'void',
          //     title: 'Addition',
          //     'x-component': 'ArrayItems.MoveDown',
          //   },
          // })
          // const moveUpNode = new TreeNode({
          //   componentName: nodeRef.value.componentName,
          //   props: {
          //     type: 'void',
          //     title: 'Addition',
          //     'x-component': 'ArrayItems.MoveUp',
          //   },
          // })

          const objectNode = new TreeNode({
            componentName: nodeRef.value.componentName,
            props: {
              type: 'object',
            },
            children: [
              // indexNode,
              ...source,
              removeNode,
              // moveDownNode,
              // moveUpNode,
            ],
          })
          return [objectNode, additionNode]
        })

        return () => {
          const node = nodeRef.value
          const nodeId = nodeIdRef.value
          const designer = designerRef.value

          const renderItems = () => {
            if (node.children.length === 0) return <DroppableWidget />
            const additions = queryNodesByComponentPath(node, [
              'ArrayItems',
              'ArrayItems.Addition',
            ])
            // const indexes = queryNodesByComponentPath(node, [
            //   'ArrayItems',
            //   '*',
            //   'ArrayItems.Index',
            // ])
            // const operations = queryNodesByComponentPath(node, [
            //   'ArrayItems',
            //   '*',
            //   isArrayCardsOperation,
            // ])
            const children = queryNodesByComponentPath(node, [
              'ArrayItems',
              '*',
              (name) => name.indexOf('ArrayItems.') === -1,
            ])

            return (
              <ArrayBase disabled={true}>
                <ArrayBase.Item index={0}>
                  <div
                    key={uid()}
                    attrs={{
                      ...createNodeId(designer, ensureObjectItemsNode(node).id),
                    }}
                  >
                    {children.length ? (
                      children.map((node) => (
                        <TreeNodeWidget {...{ key: node.id }} node={node} />
                      ))
                    ) : (
                      <DroppableWidget hasChildren={false} />
                    )}
                  </div>
                  {/* TODO::some how cannot make it working */}
                  {/* <div style="text-align:center"> */}
                  {additions.map(() => {
                    return <ArrayBase.Addition title="添加单项" />
                  })}
                  {/* </div> */}
                </ArrayBase.Item>
              </ArrayBase>
            )
          }

          return (
            <div attrs={nodeId} class="dn-array-items">
              {renderItems()}
            </div>
          )
        }
      },
    })
  ),
  {
    Behavior: createArrayBehavior('ArrayItems'),
    Resource: createResource({
      icon: 'ArrayCardsSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'array',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems',
          },
        },
      ],
    }),
    Addition: ArrayBase.Addition,
    Index: ArrayBase.Index,
    Item: ArrayBase.Item,
    // MoveDown: ArrayBase.MoveDown,
    // MoveUp: ArrayBase.MoveUp,
    Remove: ArrayBase.Remove,
    // SortHandle: ArrayBase.SortHandle,
  }
)
