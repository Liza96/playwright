import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page.locator('body')).toMatchAriaSnapshot(`
      - banner:
        - heading /Playwright enables reliable/ [level=1]
        - link "Get started"
        - link "Star microsoft/playwright on GitHub"
      - main:
        - img "Browsers (Chromium, Firefox, WebKit)"
        - heading "Any browser • Any platform • One API"
    `);
});   
test('test2', async ({ page }) => {
    await page.routeWebSocket('/ws', ws => {
        ws.onMessage(message => {
          if (message === 'request')
            ws.send('response');
        });
      });
});