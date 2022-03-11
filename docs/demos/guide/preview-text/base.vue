<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="文本预览"
        x-component="PreviewText.Input"
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
    </SchemaField>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, PreviewText, FormItem, Submit } from '@formily/vant'

const form = createForm()
const fields = createSchemaField({
  components: {
    PreviewText,
    FormItem,
  },
})

export default {
  components: { Submit, Form, ...fields },
  data() {
    return {
      form,
    }
  },
}
</script>
