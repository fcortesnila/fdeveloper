import { expect, test } from '@playwright/test'

test('visitors can open a project article from the project list and return', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects' }).click()

  await expect(page).toHaveURL(/#\/projects$/)
  await page.getByRole('link', { name: 'Read project details' }).first().click()

  await expect(page).toHaveURL(/#\/projects\/avian-vet$/)
  await expect(page.getByRole('heading', { name: 'Avian Vet', level: 1 })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'A clinic software starting point' })).toBeVisible()
  await expect(page.getByRole('complementary', { name: 'Project details' })).toContainText('Docker Compose')

  await page.getByRole('link', { name: /all projects/i }).click()
  await expect(page).toHaveURL(/#\/projects$/)
  await expect(page.getByRole('heading', { name: 'Selected projects & experiments.' })).toBeVisible()
})

test('project articles load directly from their hash route', async ({ page }) => {
  await page.goto('/#/projects/basic-phone-directory-api')

  await expect(page.getByRole('heading', { name: 'Basic Phone Directory API', level: 1 })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'An optional agent workflow' })).toBeVisible()
})
