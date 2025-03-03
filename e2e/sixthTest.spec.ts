import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 160, height: 120 },
});

test('my test', async ({ page }) => {
  await page.goto('https://www.qa-practice.com/');

    // Нажмите ссылку «Single UI Elements».
  await page.getByRole('link', { name: 'Single UI Elements' }).click();
  
    // Ожидается, что страница будет иметь заголовок с именем 'Hello!'.
  await expect(page.getByRole('heading', { name: 'Hello!' })).toBeVisible();
});

// Устанавливаем язык и часовой пояс для всех тестов в этой группе
test.use({
  locale: 'de-DE', // Немецкий язык
  timezoneId: 'Europe/Berlin', // Часовой пояс Берлина
});

test('my test for de lang in Berlin timezone', async ({ page }) => {
  // 1. Переходим на страницу Bing
  await page.goto('https://www.bing.com');

  // 2. Проверяем, что заголовок страницы содержит немецкий текст
  const title = await page.title();
  expect(title).toContain('Bing'); // Заголовок должен содержать "Bing"

  // 3. (Опционально) Проверяем текущую дату/время (если доступно)
  // Например, если есть элемент с текущим временем, можно проверить его формат
  // const currentTimeElement = page.locator('selector-for-current-time');
  // const currentTimeText = await currentTimeElement.innerText();
  // expect(currentTimeText).toMatch(/\d{2}:\d{2}/); // Проверяем формат времени HH:MM

  console.log('Тест выполнен успешно!');
});

test.use({
    geolocation: { longitude: 41.890221, latitude: 12.492348 },
    permissions: ['geolocation'],
  });
  
test('my test with geolocation', async ({ page }) => {
  await page.goto('https://www.bing.com');
});

// Выдаем разрешения на уведомления перед каждым тестом
test.beforeEach(async ({ context }) => {
  // Предоставляем разрешение на уведомления для https://skype.com
  await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });
});

// Выдаем разрешения на уведомления перед каждым тестом
test.beforeEach(async ({ context }) => {
  // Предоставляем разрешение на уведомления для https://skype.com
  await context.grantPermissions(['notifications'], { origin: 'https://skype.com' });
});

// Тест 1: Проверяем, что разрешения на уведомления работают
test('first - notifications permission is granted', async ({ context, page }) => {
  // 1. Переходим на страницу Skype
  await page.goto('https://www.skype.com');

  // 2. Проверяем текущие разрешения для этой страницы через context.permissions
  const permissions = await clearPermissions({ origin: 'https://skype.com' });
  expect(permissions).toContain('notifications'); // Убеждаемся, что разрешение на уведомления предоставлено

  // 3. (Опционально) Имитируем запрос на уведомления
  // Если страница запрашивает разрешение на уведомления, оно должно быть уже предоставлено
  const notificationPermission = await page.evaluate(() => {
    return Notification.permission; // Проверяем статус разрешений в браузере
  });

  // 4. Проверяем, что статус разрешений равен "granted"
  expect(notificationPermission).toBe('granted');
  console.log('Разрешения на уведомления предоставлены успешно!');
});

test.use({
    colorScheme: 'dark' // or 'light'
  });
  
  test('my test with dark mode', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/');
  });
