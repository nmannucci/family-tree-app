import adapter from '@sveltejs/adapter-static';

const config = {
  // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
  compilerOptions: null,

  // an array of file extensions that should be treated as Svelte components
  extensions: ['.svelte'],

  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    amp: false,
    appDir: '_app',
    files: {
      assets: 'static',
      hooks: 'src/hooks',
      lib: 'src/lib',
      routes: 'src/routes',
      serviceWorker: 'src/service-worker',
      template: 'src/app.html',
    },
    serviceWorker: {
      exclude: [],
    },
    floc: false,
    host: null,
    hostHeader: null,
    hydrate: true,
    paths: {
      assets: '',
      base: '',
    },
    prerender: {
      crawl: true,
      enabled: true,
      force: false,
      pages: ['*'],
    },
    router: true,
    ssr: true,
    target: null,
    trailingSlash: 'never',
    package: {
      dir: 'package',
      exports: {
        include: ['**'],
        exclude: ['_*', '**/_*'],
      },
      files: {
        include: ['**'],
        exclude: [],
      },
    },
    vite: () => ({}),
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: require('svelte-windicss-preprocess').preprocess({
    config: 'tailwind.config.js', // tailwind config file path
    compile: true, // false: interpretation mode; true: compilation mode
    prefix: 'windi-', // set compilation mode style prefix
    globalPreflight: true, // set preflight style is global or scoped
    globalUtility: true, // set utility style is global or scoped
  }),
};

export default config;
