
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bakame-official-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/bakame-official-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24501, hash: 'b0c1fd7b08e94059b4bb49e55554d1c9ec1121349c00d5959b4ede25ba255810', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17289, hash: '1f3fd576ee5ddb6b8969b41b0530706461d01a3b28eb5a777ade60284db90641', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37767, hash: '1abeeaf13db220d802dc25e8ec3ce2dc4aca01695340184b8bdbb0750f3f8192', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OF5BH2R2.css': {size: 7881, hash: 'IcWmmMyx5JY', text: () => import('./assets-chunks/styles-OF5BH2R2_css.mjs').then(m => m.default)}
  },
};
