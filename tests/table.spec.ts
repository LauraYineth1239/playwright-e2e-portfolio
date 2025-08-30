// Ejercicio C — Filtros y encadenamiento

import { test, expect } from '@playwright/test';

test('buscar y validar resultados en Wikipedia', async ({ page }) => {
  // Forzamos inglés para que "Contents" exista siempre
  await page.goto('https://en.wikipedia.org/');

  await page.getByLabel('Search Wikipedia').fill('Playwright');
  await page.getByRole('button', { name: 'Search' }).click();

  // Valida el H1 de la página destino
  const h1 = page.getByRole('heading', { level: 1 });
  await expect(h1).toContainText(/Playwright/i);

  // TOC: usa heading o navigation en lugar de link
  // Opción A:
  await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible();

  // (Si prefieres región de navegación)
  // const toc = page.getByRole('navigation', { name: 'Contents' });
  // await expect(toc).toBeVisible();
});