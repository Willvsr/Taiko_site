
export default {
  basePath: 'https://Willvsr.github.io/Taiko_site',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
