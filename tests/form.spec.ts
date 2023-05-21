import { test, expect } from '@playwright/test'

test.describe('Form lead', () => {
  // test('Open login page', async ({page})=> {
  //     await page.goto('https://test.salesforce.com/')
  //     const pageButtonElement = await page.locator('input#Login')

  //     await expect(pageButtonElement).toContainText('Log In to Sandbox')
  // })
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/')
    const pageButtonElement = await page.locator('input#Login')

    await expect(pageButtonElement).toContainText('Log In to Sandbox')
  })
  test('Login page', async ({ page }) => {
    test.setTimeout(120000);
    await page.type('#username', 'admin-bvrm@force.com.mbautomat')
    await page.type('#password', 'Clorce5@')
    await page.click('text=Log In to Sandbox')
  })

  test('Check url of start page', async ({ page }) => {
    await expect(page).toHaveURL(
      'https://spar--mbautomat.sandbox.lightning.force.com/lightning/page/home'
    )
    const icon = await page.locator('.appLauncher')
    await expect(icon).toBeVisible()
  })

  test('Click Applauncher icon', async ({ page }) => {
    await page.click('.appLauncher')
  })
})
