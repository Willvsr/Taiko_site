
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Willvsr.github.io/Taiko_site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Taiko_site/home",
    "route": "/Taiko_site"
  },
  {
    "renderMode": 2,
    "route": "/Taiko_site/home"
  },
  {
    "renderMode": 2,
    "route": "/Taiko_site/login"
  },
  {
    "renderMode": 2,
    "route": "/Taiko_site/aluno"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Taiko_site/home",
    "route": "/Taiko_site/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5252, hash: '2298426c14ca493c08a2e1554c10a3c9024bb3c53930395a8bab3c8c1d9271f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1224, hash: 'ff0018e818c8bf02e63c6ec5ab32c97bd892cd8b134bc4eef82a71503fb6e916', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 29430, hash: '7ea6767a21a0130a7d99a535830a8fec3903ca18fb639853741e60932b3a3eba', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29430, hash: '7ea6767a21a0130a7d99a535830a8fec3903ca18fb639853741e60932b3a3eba', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'aluno/index.html': {size: 29430, hash: '7ea6767a21a0130a7d99a535830a8fec3903ca18fb639853741e60932b3a3eba', text: () => import('./assets-chunks/aluno_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
