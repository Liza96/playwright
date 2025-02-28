import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cleverbots.ru/');
  await page.getByRole('dialog', { name: 'You can close this modal' }).getByRole('img').click();
  await page.locator('#menu-glavnoe-menyu').getByRole('listitem').filter({ hasText: 'место в разработке чат-ботов и диалоговых интерфейсов по итогам 2021 года Топ-3' }).getByRole('link').first().click();
  await page.getByRole('link', { name: 'Главная' }).click();
  await page.goto('https://www.qa-practice.com/');
});