import { IBuilderConfig } from '@formily/template'

export const BuilderConfig: IBuilderConfig = {
  targetLibName: 'vant',
  targetLibCjsDir: 'lib',
  targetLibEsDir: 'es',
  externals: {
    '@formily/vant': 'Formily.Vant',
    '@formily/antdv': 'Formily.Antdv',
    '@formily/antdv-designable': 'Formily.AntdvDesignable',
    '@formily/antdv-setters': 'Formily.AntdvSetters',
    '@formily/antdv-settings-form': 'Formily.AntdvSettingsForm',
  },
}
