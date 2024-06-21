import { test, expect } from '@playwright/test';

test.describe('Follow the link', () => {
    test.describe.configure({ mode: 'parallel' });

    test('Go to a link', {
        annotation: {
            type: 'iisue',
            description: 'https://app.clickup.com/9005081859/v/dc/8cbx983-6307/8cbx983-33038'
        }
    }, async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await expect(page).toHaveURL('http://localhost:3000/');
    });
});

test.describe.fixme('Find the input field', () => {
    test('Input', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('test');
        await page.getByRole('button', { name: 'Add +' }).click();
        
        // Verify that the input field exists and is interactable
        await expect(page.locator('input[name="todosTxtbx"]')).toBeVisible();
        await page.locator('input[name="todosTxtbx"]').click();
        await page.locator('input[name="todosTxtbx"]').fill('test');
        await page.locator('input[name="todosTxtbx"]').press('Enter');
        
        // Verify that the input field is filled and Enter key works
        await expect(page.locator('input[name="todosTxtbx"]')).toHaveValue('test');
        await page.locator('input[name="todosTxtbx"]').fill('test');
        await page.locator('input[name="todosTxtbx"]').press('Enter');
        
        // Verify that the input field is cleared after pressing Enter
        await expect(page.locator('input[name="todosTxtbx"]')).toHaveValue('');
    });
});

test.describe('Enter value in input', () => {
    test('Enter value', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('textbox').fill('test');
        
        // Verify that the text box contains the correct value
        await expect(page.getByRole('textbox')).toHaveValue('test');
    });
});

test.describe.skip('Everything else', () => {
    test('Everything else', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill('test');
        await page.getByRole('button', { name: 'Add +' }).click();
        
        // Verify that the input field is interactable and can be filled
        await expect(page.locator('input[name="todosTxtbx"]')).toBeVisible();
        await page.locator('input[name="todosTxtbx"]').click();
        await page.locator('input[name="todosTxtbx"]').fill('test');
        await page.locator('input[name="todosTxtbx"]').press('Enter');
        
        // Verify that the input field is filled and Enter key works
        await expect(page.locator('input[name="todosTxtbx"]')).toHaveValue('test');
        await page.locator('input[name="todosTxtbx"]').fill('test');
        await page.locator('input[name="todosTxtbx"]').press('Enter');
        
        // Verify that the input field is cleared after pressing Enter
        await expect(page.locator('input[name="todosTxtbx"]')).toHaveValue('');
    });
});