import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Since we are testing a static site without a web server (Jekyll is usually run by GitHub Pages),
// we will load the index.html directly from the file system.
const indexUrl = `file:///${path.resolve(__dirname, '../index.html').replace(/\\/g, '/')}`;

test('Website has Manifesto link in navigation', async ({ page }) => {
  await page.goto(indexUrl);

  // Check if the manifesto link is present in the nav
  const manifestoNavLink = page.locator('#nav-link-manifesto');
  await expect(manifestoNavLink).toBeVisible();
  await expect(manifestoNavLink).toHaveText('Manifesto');
  await expect(manifestoNavLink).toHaveAttribute('href', '/manifesto/');
});

test('Website has Manifesto CTA in hero section', async ({ page }) => {
  await page.goto(indexUrl);

  // Check if the hero CTA links to the manifesto
  const ctaManifesto = page.locator('#cta-read-manifesto');
  await expect(ctaManifesto).toBeVisible();
  await expect(ctaManifesto).toHaveText('Read the Manifesto');
  await expect(ctaManifesto).toHaveAttribute('href', '/manifesto/');
});

test('Manifesto markdown files exist in repository', async () => {
  // Verify that the markdown files were copied over correctly
  const manifestoExists = fs.existsSync(path.resolve(__dirname, '../manifesto.md'));
  expect(manifestoExists).toBe(true);

  const notesExist = fs.existsSync(path.resolve(__dirname, '../MANIFESTO_PUBLICATION_NOTES.md'));
  expect(notesExist).toBe(true);
});
