import { test } from '@playwright/test';

test.describe('Task management tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('should click on the input field', async ({ page }) => {
    await page.getByRole('textbox').click();
  });

  test('should enter the task name', async ({ page }) => {
    await page.getByRole('textbox').fill('My First Note');
  });

  test('should add the new task', async ({ page }) => {
    await page.getByRole('textbox').fill('My First Note');
    await page.getByRole('button', { name: 'Add +' }).click();
  });

  test('should delete the task', async ({ page }) => {
    await page.getByRole('textbox').fill('My First Note');
    await page.getByRole('button', { name: 'Add +' }).click();
    await page.getByRole('button', { name: 'x' }).click();
  });

});