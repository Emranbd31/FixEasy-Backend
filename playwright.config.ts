import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'https://fixeasy.irish',
        headless: true,
        trace: 'on-first-retry',
    },
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});
