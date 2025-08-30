/* Ejercicio B — TodoMVC (lista de tareas) */

import { test, expect } from '@playwright/test';

test('crear y filtrar tareas', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const newTodo = page.getByPlaceholder('What needs to be done?');

  // Crea 3 ítems
  await newTodo.fill('Aprender Playwright');
  await newTodo.press('Enter');
  await newTodo.fill('Escribir pruebas estables');
  await newTodo.press('Enter');
  await newTodo.fill('Dormir 8 horas 😴');
  await newTodo.press('Enter');

  // Assert: existen 3
  await expect(page.getByTestId('todo-item')).toHaveCount(3);

  // Completa el segundo
  await page.getByTestId('todo-item').nth(1).getByRole('checkbox').check();
  await expect(page.getByTestId('todo-item').nth(1)).toHaveClass(/completed/);

  // Filtro "Active"
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-item')).toHaveCount(2);
  await expect(page.getByText('Aprender Playwright')).toBeVisible();

  // Filtro "Completed"
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-item')).toHaveCount(1);
  await expect(page.getByText('Escribir pruebas estables')).toBeVisible();
});

test('@smoke crear y filtrar tareas', async ({ page }) => { /* ... */ });