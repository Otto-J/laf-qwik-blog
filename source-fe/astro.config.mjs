import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import qwikDev from "@qwikdev/astro";
import tailwind from "@astrojs/tailwind";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ijust.cc",
  base: "/", // 逻辑中通过 import.meta.env.BASE_URL 获取
  trailingSlash: "ignore", // 开发服务器是否始终包含 / 结尾，
  // trailingSlash: "always", // 开发服务器是否始终包含 / 结尾，
  redirects: {
    // 重定向，ssg 里就是 meta 里的 redirect，
    // 可以通过前置脚本来动态设置重定向
    // "/old": "/new",
    // "/blog/[...slug]": "/articles/[...slug]",
  },
  // output: "static", // default=static static=ssg, server=ssr, hybrid=ssg+ssr
  // adapter: // 设定适配器，后续自定义
  integrations: [
    qwikDev(),
    vue({
      appEntrypoint: "/src/pages/_app",
      // 如果考虑启用 jsx
      // https://docs.astro.build/zh-cn/guides/integrations-guide/vue/
      template: {
        compilerOptions: {
          // 将任意以 ion- 开头的标签当做自定义元素
          // isCustomElement: (tag) => tag.startsWith("ion-"),
        },
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            vue: ["ref", "watchEffect"],
            // "@builder.io/qwik": ["component$", "useSignal"],
            // "@vueuse/core": [
            // named imports
            // "useMouse", // import { useMouse } from '@vueuse/core',
            // alias
            // ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
            // ],
            // axios: [
            //   // default imports
            //   ["default", "axios"], // import { default as axios } from 'axios',
            // ],
            // "[package-name]": [
            //   "[import-names]",
            //   // alias
            //   ["[from]", "[alias]"],
            // ],
          },
          // example type import
          // {
          //   from: "vue-router",
          //   imports: ["RouteLocationRaw"],
          //   type: true,
          // },
        ],
      }),
      // Components({
      //   /* options */
      //   dts: true,
      //   resolvers: [
      //     // example of importing Vant
      //     (componentName) => {
      //       // where `componentName` is always CapitalCase
      //       // if (componentName.startsWith("Van"))
      //       //   return { name: componentName.slice(3), from: "vant" };
      //     },
      //   ],
      // }),
    ],
  }, // 自定义 vite 配置
  // build: {},
  // server: {},
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [], // remark-toc
  },
});
