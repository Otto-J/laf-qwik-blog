import { defineConfig } from "astro/config";

import qwikDev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikDev()],
});
