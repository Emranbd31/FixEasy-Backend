import { test, expect } from '@playwright/test';

test('Create Account (Sign Up) flow', async ({ page }) => {
    await page.goto('/auth/signup');
    await page.fill('input[placeholder="Full Name"]', 'Test User');
    await page.fill('input[type="email"]', 'emranbd31+signup@gmail.com');
    await page.fill('input[type="password"]', 'Test1234!');
    await page.click('button[type="submit"]');
    // Wait for success message or redirect
    await expect(
        page.locator('text=success').or(page.locator('text=confirm').or(page.locator('text=dashboard')))
    ).toBeVisible({ timeout: 10000 });
});
