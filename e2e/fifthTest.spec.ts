// Annotations - Paragraf

import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://www.qa-practice.com/');

// Ожидается, что заголовок «будет содержать» подстроку.
  await expect(page).toHaveTitle(/Home Page | QA Practice/);
});

test.skip('get started link', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/');
  
    // Нажмите ссылку «Single UI Elements».
    await page.getByRole('link', { name: 'Single UI Elements' }).click();
  
    // Ожидается, что страница будет иметь заголовок с именем 'Hello!'.
    await expect(page.getByRole('heading', { name: 'Hello!' })).toBeVisible();
  });

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Still working on it');
    await page.goto('https://www.qa-practice.com/');
});

test.describe('two tests', () => {
  test('Переход на страницу практики', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/');
  });

  test('Переход на страницу PW', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
});

test('test login page', {
  tag: '@fast',
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('test full report @slow', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page does not work in mobile yet');
  await page.goto('https://playwright.dev/docs/test-annotations');
});

test('user profile', async ({ page }) => {
  await page.getByText('My Profile').click();
});

test('example test', async ({ page, browser }) => {
  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});