// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/guide/index":{"path":"guide","id":"docs/guide/index","parentId":"DocLayout"},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'/Users/jenny/Documents/project/app/hooks/node_modules/.pnpm/dumi@2.2.17_@babel+core@7.23.7_@types+node@20.11.5_eslint@8.56.0_prettier@2.8.8_react-dom@18._b7ap5gv2qxpz3ubwdzytbsujei/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'/Users/jenny/Documents/project/app/hooks/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'/Users/jenny/Documents/project/app/hooks/node_modules/.pnpm/dumi@2.2.17_@babel+core@7.23.7_@types+node@20.11.5_eslint@8.56.0_prettier@2.8.8_react-dom@18._b7ap5gv2qxpz3ubwdzytbsujei/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/guide/index': React.lazy(() => import(/* webpackChunkName: "docs__guide__index.md" */'/Users/jenny/Documents/project/app/hooks/docs/guide/index.md')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'/Users/jenny/Documents/project/app/hooks/docs/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'/Users/jenny/Documents/project/app/hooks/node_modules/.pnpm/dumi@2.2.17_@babel+core@7.23.7_@types+node@20.11.5_eslint@8.56.0_prettier@2.8.8_react-dom@18._b7ap5gv2qxpz3ubwdzytbsujei/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
