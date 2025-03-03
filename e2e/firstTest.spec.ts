//Writing tests - Paragraf

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.qa-practice.com/');

// Ожидается, что заголовок «будет содержать» подстроку.
  await expect(page).toHaveTitle(/Home Page | QA Practice/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.qa-practice.com/');

  // Нажмите ссылку «Single UI Elements».
  await page.getByRole('link', { name: 'Single UI Elements' }).click();

  // Ожидается, что страница будет иметь заголовок с именем 'Hello!'.
  await expect(page.getByRole('heading', { name: 'Hello!' })).toBeVisible();
});
