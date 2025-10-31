import { test, expect } from '@playwright/test';

test('Booking flow', async ({ page }) => {
    await page.goto('/book/cleaning');
    await page.fill('input[placeholder="Name"]', 'Test User');
    await page.fill('input[type="email"]', 'emranbd31+signup@gmail.com');
    await page.fill('input[placeholder*="Address"]', '12 Test Street, Dublin');
    await page.fill('input[type="date"]', '2025-10-29');
    await page.fill('input[type="time"]', '10:00');
    await page.click('button[type="submit"]');
    await expect(
        page.locator('text=success').or(page.locator('text=confirm'))
    ).toBeVisible({ timeout: 10000 });
});
