<template>
  <div class="w-full">
    <div class="title text-white py-8 text-center bg-gray-900 flex flex-col">
      <h1 class="text-xl">{{ appConfig.website_title }}</h1>
      <p class="text-sm mt-4">{{ appConfig.website_description }}</p>
    </div>
    <div class="space-y-2">
      <div class="mk:py-2 py-0">
        <!-- list -->
        <var-paper
          :elevation="2"
          class="self-cell flex flex-wrap flex-row md:flex-col justify-center"
        >
          <nuxt-link to="/">
            <var-cell ripple title="Home">
              <template #icon>
                <icon
                  name="material-symbols:other-houses-outline"
                  size="18"
                  class="mr-2"
                />
              </template>
            </var-cell>
          </nuxt-link>

          <nuxt-link to="/blogs/page/1">
            <var-cell ripple title="Blogs">
              <template #icon>
                <icon
                  name="material-symbols:edit-calendar"
                  size="18"
                  class="mr-2"
                />
              </template>
            </var-cell>
          </nuxt-link>
          <nuxt-link to="/tags/FM">
            <var-cell ripple title="Podcasts">
              <template #icon>
                <icon name="material-symbols:podcasts" class="mr-2" size="18" />
              </template>
            </var-cell>
          </nuxt-link>
          <nuxt-link to="/about">
            <var-cell ripple title="About">
              <template #icon>
                <icon name="material-symbols:person-4" size="18" class="mr-2" />
              </template>
            </var-cell>
          </nuxt-link>
          <nuxt-link to="/archive">
            <var-cell ripple title="Archive">
              <template #icon>
                <icon
                  name="material-symbols:archive-outline"
                  size="18"
                  class="mr-2"
                />
              </template>
            </var-cell>
          </nuxt-link>
          <nuxt-link to="/tags">
            <var-cell ripple title="Tags">
              <template #icon>
                <icon
                  name="material-symbols:auto-label-outline"
                  size="18"
                  class="mr-2"
                />
              </template>
            </var-cell>
          </nuxt-link>
          <nuxt-link to="/tools">
            <var-cell ripple title="Tools">
              <template #icon>
                <icon
                  name="material-symbols:tools-power-drill-outline"
                  size="18"
                  class="mr-2"
                />
              </template>
            </var-cell>
          </nuxt-link>
        </var-paper>
      </div>
      <var-paper
        class="lg:pt-2 pt-0 mx-0 pb-6 text-center text-gray-800 dark:text-gray-100"
        :elevation="2"
      >
        <var-image width="50%" class="mx-auto" src="/boy.png" />
        <p class="text-lg text-gray-600">{{ appConfig.website_author_name }}</p>
        <p class="text-sm text-gray-500">{{ appConfig.website_author_desc }}</p>

        <div class="flex justify-center items-center space-x-2 mt-2">
          <div v-for="item of socialLinks" :key="item.link">
            <a :href="item.link" target="_blank">
              <icon size="20" :name="item.name" />
            </a>
          </div>
          <div class="cursor-pointer" @click="toggleDark(!isDark)">
            <icon
              size="20"
              v-show="isDark"
              name="material-symbols:light-mode-outline"
            />
            <icon
              size="20"
              name="material-symbols:mode-night-outline"
              v-show="!isDark"
            />
          </div>
        </div>

        <p class="mt-4 text-sm text-gray-500">最近在学 Nuxt.js</p>
      </var-paper>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
import { StyleProvider, Themes } from "@varlet/ui";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const appConfig = useAppConfig();

let currentTheme = isDark.value ? Themes.dark : null;
watchEffect(() => {
  currentTheme = isDark.value ? Themes.dark : null;
  StyleProvider(currentTheme);
});

const socialLinks = [
  {
    name: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/otto-j",
  },

  {
    name: "material-symbols:podcasts-app",
    friendlyName: "小宇宙",
    link: "https://www.xiaoyuzhoufm.com/podcast/6499832682e9dc2fb6db06b4",
  },
  {
    name: "material-symbols:podcasts",
    friendlyName: "Apple Podcast",
    link: "https://podcasts.apple.com/cn/podcast/%E5%92%BF%E5%91%80-%E8%83%BD%E8%B7%91%E5%B0%B1%E8%A1%8C/id1695704262",
  },
  {
    name: "material-symbols:rss-feed",
    friendlyName: "WebSite",
    link: "/rss.xml",
  },
];
</script>

<style>
.self-cell > a > .var-cell {
  @apply dark:hover:bg-gray-700 hover:bg-gray-200;
}
</style>
