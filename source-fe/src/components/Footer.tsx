import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="mt-20 space-x-2 text-xs text-gray-500 dark:text-gray-200 text-center container mx-auto mb-2">
      <span>Copyright &copy; 2013-2023 辛宝Otto</span>
      <span>🚀</span>
      <a target="_blank" href="https://beian.miit.gov.cn/">
        京ICP备17060663号-2
      </a>
    </footer>
  );
});
