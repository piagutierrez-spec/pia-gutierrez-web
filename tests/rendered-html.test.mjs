import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

test("page metadata reflects the personal site", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", templateRoot), "utf8"),
    readFile(new URL("app/layout.tsx", templateRoot), "utf8"),
  ]);

  assert.match(page, /Pía Gutiérrez Sasaky/);
  assert.match(page, /Learning & Development/);
  assert.doesNotMatch(page, /codex-preview/);
  assert.match(layout, /Página personal de Pía Gutiérrez Sasaky/);
});

test("starter preview files were removed", async () => {
  await assert.rejects(() =>
    access(new URL("app/_sites-preview/SkeletonPreview.tsx", templateRoot)),
  );
});

test("package manifest no longer depends on the skeleton library", async () => {
  const packageJson = await readFile(new URL("package.json", templateRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
