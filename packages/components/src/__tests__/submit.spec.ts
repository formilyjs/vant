import { Submit } from '../submit'
import { render } from '@testing-library/vue'
import { defineComponent } from 'vue-demi'
import { FormProvider, Field } from '@formily/vue'
import { createForm } from '@formily/core'

test('render Submit', () => {
  const form = createForm()
  render(
    defineComponent({
      name: 'TestSubmit',
      components: {
        FormProvider,
        Field,
      },
      setup() {
        return {
          form,
          Submit,
        }
      },
      template: `
        <FormProvider :form="form">
          <Field 
            name="aa"
            :component="[Submit]"
            content="提交"
          />
        </FormProvider>
      `,
    })
  )
  expect(form.mounted).toBeTruthy()
  expect(form.query('aa').take().mounted).toBeTruthy()
})
