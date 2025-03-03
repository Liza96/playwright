import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qa-practice.com/');
  await page.getByRole('link', { name: 'Text input' }).click();
  await page.getByRole('textbox', { name: 'Text string*' }).click();
  await page.getByRole('textbox', { name: 'Text string*' }).fill('hhhhh');
  await page.getByRole('textbox', { name: 'Text string*' }).press('Enter');
  await expect(page.locator('img')).toBeVisible();
  await expect(page.locator('img')).toBeVisible();
  await page.locator('img').click();
  await page.locator('img').click();
  await page.locator('img').click();
  await page.getByRole('listitem').filter({ hasText: 'Password field' }).click();
});