import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox').click();
  await page.getByRole('button', { name: 'Add +' }).click();
  await page.locator('#root').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('est value');
  await page.getByRole('button', { name: 'Add +' }).click();
  await page.locator('input[name="todosTxtbx"]').click();
  await page.locator('input[name="todosTxtbx"]').fill('test value');
  await page.getByRole('button', { name: 'Add +' }).click();
});