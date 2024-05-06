import { test, expect } from '@playwright/test'

test('block-price', async ({ page }) => {
  // Given
  await page.goto('/?preview_theme_id=167176831280')
  await page.getByRole('link', { name: 'block-title' }).click()
  let data = JSON.parse(await page.getByTestId('product-json').innerText())
  // When
  let blockTitle = page.locator('.block-title').last()
  // Then
  await expect(blockTitle).toContainText(data.title)
  if (data.vendor) await expect(blockTitle).toContainText(data.vendor)
  if (data.selectedOrFirstAvailableVariant.sku)
    await expect(blockTitle).toContainText(data.selectedOrFirstAvailableVariant.sku)
})
