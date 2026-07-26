import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as path from 'path';

const indexUrl = `file:///${path.resolve(__dirname, '../index.html').replace(/\\/g, '/')}`;

test.describe('Usability and Accessibility Gold Standards', () => {
  test('Homepage passes Axe accessibility audit', async ({ page }) => {
    await page.goto(indexUrl);

    // Wait for fadeSlideUp animations to complete (they take ~1s)
    await page.waitForTimeout(1500);

    // Run Axe audit on the homepage
    const accessibilityScanResults = await new AxeBuilder({ page })
      // We exclude some generic contrast rules if they are heavily themed, but since we are proving our theme, we run it fully!
      .analyze();

    // Verify there are zero accessibility violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
