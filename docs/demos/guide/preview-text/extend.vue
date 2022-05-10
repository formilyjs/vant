<template>
  <Form :form="form" :previewTextPlaceholder="vnode">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="文本预览"
        x-component="Input"
        default="Hello world"
      />

      <SchemaStringField
        name="switch"
        title="开关"
        x-decorator="FormItem"
        x-component="PreviewText.Switch"
        :default="true"
      />

      <SchemaArrayField
        name="checkboxGroup"
        title="复选框组"
        x-decorator="FormItem"
        :enum="[
          { label: '复选框 1', name: 123, shape: 'square' },
          { label: '复选框 2', name: 222, shape: 'square' },
        ]"
        :default="[123, 222]"
        x-component="PreviewText.Checkbox"
        :x-component-props="{
          direction: 'horizontal',
          multiple: true,
        }"
      />

      <SchemaArrayField
        name="radio"
        title="单选框"
        x-decorator="FormItem"
        :enum="[
          { label: '单选框 1', name: 1 },
          { label: '单选框 1', name: 2 },
        ]"
        :default="1"
        x-component="PreviewText.Checkbox"
        :x-component-props="{
          direction: 'horizontal',
        }"
      />

      <SchemaStringField
        name="stepper"
        title="步进器"
        x-decorator="FormItem"
        :default="50"
        x-component="PreviewText.Stepper"
      />

      <SchemaStringField
        name="rate"
        title="评分"
        x-decorator="FormItem"
        :default="3.5"
        x-component="PreviewText.Rate"
        :x-component-props="{
          allowHalf: true,
        }"
      />

      <SchemaStringField
        name="slider"
        title="滑块"
        x-decorator="FormItem"
        :default="50"
        x-component="PreviewText.Slider"
      />

      <SchemaStringField
        name="uploader"
        title="文件上传"
        x-decorator="FormItem"
        :default="[
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          { url: 'https://cloud-image', isImage: true },
        ]"
        x-component="PreviewText.Uploader"
      />

      <SchemaStringField
        name="picker"
        title="选择器"
        default="湖州"
        x-component="PreviewText.Picker"
        :x-component-props="{
          formItemProps: {
            placeholder: '点击选择城市',
          },
          pickerProps: {
            columns: [
              '杭州',
              '宁波',
              '温州',
              '绍兴',
              '湖州',
              '嘉兴',
              '金华',
              '衢州',
            ],
          },
        }"
      />

      <SchemaStringField
        name="datetimePicker"
        title="时间选择"
        default="05:15"
        x-component="PreviewText.DatetimePicker"
        :x-component-props="{
          formItemProps: {
            placeholder: '点击选择时间',
          },
          popupProps: {},
          datetimePickerProps: {
            type: 'time',
          },
          fieldListeners: {},
          popupListeners: {},
          datetimePickerListeners: {},
        }"
      />

      <SchemaStringField
        name="area"
        title="地区选择"
        default="北京市/北京市/东城区"
        x-component="PreviewText.Area"
        :x-component-props="{
          formItemProps: {
            placeholder: '点击选择省市区',
            format: (val) =>
              (val || [])
                .filter((item) => !!item)
                .map((item) => item && item.name)
                .join('/'),
          },
          popupProps: {},
          areaProps: {
            areaList: {
              province_list: {
                110000: '北京市',
                120000: '天津市',
              },
              city_list: {
                110100: '北京市',
                120100: '天津市',
              },
              county_list: {
                110101: '东城区',
                110102: '西城区',
              },
            },
          },
          fieldListeners: {},
          popupListeners: {},
          areaListeners: {},
        }"
      />

      <SchemaStringField
        name="calendar"
        title="日历"
        default="2/24"
        x-component="PreviewText.Calendar"
        :x-component-props="{
          formItemProps: {
            placeholder: '选择日历',
            format: (date) =>
              date && `${date.getMonth() + 1}/${date.getDate()}`,
          },
          calendarProps: {},
          fieldListeners: {},
          calendarListeners: {},
        }"
      />

      <SchemaStringField
        name="calendar"
        title="日历区间"
        x-component="Calendar"
        :x-component-props="{
          formItemProps: {
            placeholder: '选择日历区间',
            format: (date) => {
              if (!date) return ''
              const [start, end] = date
              return `${start.getFullYear()}/${
                start.getMonth() + 1
              }/${start.getDate()} - ${end.getFullYear()}/${
                end.getMonth() + 1
              }/${end.getDate()}`
            },
          },
          calendarProps: {
            type: 'range',
            color: '#1989fa',
          },
          fieldListeners: {},
          calendarListeners: {},
        }"
      />

      <SchemaStringField
        name="cascader"
        title="地区"
        x-component="Cascader"
        :x-component-props="{
          formItemProps: {
            placeholder: '请选择所在地区',
            format: (data) => {
              const { selectedOptions = [] } = data || {}
              return selectedOptions.map((option) => option.text).join('/')
            },
          },
          popupProps: {},
          cascaderProps: {
            options: [
              {
                text: '浙江省',
                value: '330000',
                children: [{ text: '杭州市', value: '330100' }],
              },
              {
                text: '江苏省',
                value: '320000',
                children: [{ text: '南京市', value: '320100' }],
              },
            ],
          },
          fieldListeners: {},
          popupListeners: {},
          cascaderListeners: {
            change: (...args) => {
              console.log('onChange args: ', args)
            },
          },
        }"
      />
    </SchemaField>

    <Submit
      :style="{ 'margin-top': '16px' }"
      round
      block
      @click="changeEditable"
    >
      切换阅读态
    </Submit>
  </Form>
</template>

<script>
import { h } from '@vue/composition-api'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  PreviewText,
  Input,
  Cascader,
  Calendar,
  FormItem,
  Submit,
} from '@formily/vant'

const form = createForm()
const fields = createSchemaField({
  components: {
    PreviewText,
    Input,
    FormItem,
    Cascader,
    Calendar,
  },
})

export default {
  components: { Submit, Form, ...fields },
  data() {
    return {
      form,
      vnode: () => h('div', {}, '--'),
    }
  },
  methods: {
    changeEditable() {
      this.form.setState((state) => {
        state.editable = !state.editable
      })
    },
  },
}
</script>
