import { menus } from './hooks';

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  outputPath: 'docs',
  publicPath: '/en-hooks/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  title: 'hooks',
  mode: 'site',
  favicon: 'https://avatars.githubusercontent.com/u/22335467?v=4',
  logo: 'https://avatars.githubusercontent.com/u/22335467?v=4',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    enHooks: `${process.cwd()}/packages/hooks/src/index.ts`,
    'en-hooks': `${process.cwd()}/packages/hooks/src/index.ts`,
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/hebehealer/en-hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
