import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["en", "zh-cn"],
        defaultLocale: "zh-cn",
    },
    site: 'https://rich-server.oss-cn-hongkong.aliyuncs.com',
    outDir: './dist',
    build: {
        format: 'directory'
    }
});
