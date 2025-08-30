import { test, expect } from '@playwright/test';

test('login fallido en página demo', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('usuario_falso');
  await page.getByLabel('Password').fill('clave_incorrecta');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

test('login exitoso en página demo', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});