import { test, expect } from '@playwright/test';

// Force this test file to launch a maximized browser

test('has title',{tag: ['@playwrightwithjenkins']}, async ({ browser }) => {

  const page = await browser.newPage();
    await page.setViewportSize(
    {
      width: 1920,
      height: 1080,
    }); 

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', {tag: ['@playwrightwithjenkins','@critical']}, async ({ page }) => {
   
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
