import { test, expect } from "@playwright/test";

test.describe('This is Test Case Where we Testing Creating Issue', {}, () =>{
  test("Creating Issue Started", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByPlaceholder("Text").click();
  
    await page.getByPlaceholder("Text").fill("My First Note");
  
    await page.getByRole("button", { name: "Add" }).click();
    await page.waitForSelector(
      'li[title="li"] input[name="todo"][value="My First Note"]'
    );
    await expect(
      page.locator('li[title="li"] input[name="todo"]')
    ).toHaveAttribute("value", "My First Note");
  });
})