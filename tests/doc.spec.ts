/* Ejercicios guiados (crear archivos nuevos en tests/)
Ejercicio A — Assertions base en la doc de Playwright */

import { test, expect } from '@playwright/test';

test('navegación y validaciones básicas', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Valida título
  await expect(page).toHaveTitle(/Playwright/);

  // Clic en "Get started"
  await page.getByRole('link', { name: 'Get started' }).click();

  // URL y encabezado
  await expect(page).toHaveURL(/.*docs/);
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});