import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import qwikDev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
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
  ],
});
