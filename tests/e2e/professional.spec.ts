import { test, expect } from '@playwright/test';

test('Professional Registration flow', async ({ page }) => {
    await page.goto('/register/professional');
    await page.waitForSelector('form');
    await page.fill('input[placeholder="John Doe"]', 'Test Pro');
    await page.fill('input[placeholder="+353 87 123 4567"]', '0891234567');
    await page.fill('input[placeholder="john@example.com"]', 'emranbd31+pro@gmail.com');
    await page.fill('input[placeholder="Min. 8 chars, 1 uppercase, 1 number, 1 symbol"]', 'Test1234!');
    await page.fill('input[placeholder="Re-enter password"]', 'Test1234!');
    await page.selectOption('select', { label: 'Plumbing' });
    await page.fill('input[placeholder="5"]', '7');
    await page.fill('input[placeholder="45.00"]', '50');
    await page.fill('input[placeholder="e.g., Dublin & Surrounding Areas, Cork City, All Ireland"]', 'Dublin');
    await page.click('button:has-text("Create Professional Account")');
    // Wait for a network response indicating success (API endpoint may need adjustment)
    await page.waitForResponse(response => response.url().includes('/api/register/professional') && response.ok(), { timeout: 15000 });
    await page.waitForTimeout(3000); // wait 3s after submit
    const html = await page.content();
    console.log(html);
    expect(
        html.includes('Thank') || html.includes('Success') || html.includes('Registered') || html.includes('Review')
    ).toBeTruthy();
});
