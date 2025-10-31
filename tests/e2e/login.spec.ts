import { test, expect } from '@playwright/test';

test('Login flow', async ({ page }) => {
    await page.goto('/auth/login');
    await page.fill('input[type="email"]', 'emranbd31+signup@gmail.com');
    await page.fill('input[type="password"]', 'Test1234!');
    await page.click('button[type="submit"]');
    // Wait for dashboard or success state
    await expect(
        page.locator('text=dashboard').or(page.locator('text=welcome'))
    ).toBeVisible({ timeout: 10000 });
});
