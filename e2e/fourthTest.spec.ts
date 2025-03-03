import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Поиск тестовых файлов в каталоге «e2e» относительно этого файла конфигурации.
  testDir: 'e2e',

  // Запустить все тесты параллельно.
  fullyParallel: true,

  /// Сборка на CI не будет выполнена, если вы случайно оставили test.only в исходном коде.
  forbidOnly: !!process.env.CI,

  // Повторить попытку только на CI.
  retries: process.env.CI ? 2 : 0,

  // Отказаться от параллельных тестов на CI.
  workers: process.env.CI ? 1 : undefined,

  // Репортер для использования
  reporter: 'html',

  use: {
    // Базовый URL для использования в таких действиях, как `await page.goto('/')`.
    baseURL: 'http://127.0.0.1:3000',

    // Соберите трассировку при повторной попытке неудачного теста.
    trace: 'on',
  },
  // Настройка проектов для основных браузеров.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Перед началом тестов запустите локальный сервер разработки.
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});