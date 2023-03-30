import { build, BuildOptions, context } from 'esbuild';
import path from 'path';

export const CLIENT_SOURCE_DIR = path.join(process.cwd(), 'src/client/');
export const OUT_FILE = path.join(process.cwd(), 'docs/bundle');

export const ENTRY_POINT = path.join(CLIENT_SOURCE_DIR, 'index.tsx');
export const DEV_ENTRY_POINT = path.join(CLIENT_SOURCE_DIR, 'dev.ts');

export const TSCONFIG_FILE = path.join(CLIENT_SOURCE_DIR, 'tsconfig.json');

export function createBuildOptions<T extends BuildOptions>(opitons: T): T {
  return opitons;
}

export const bundleOptions = createBuildOptions({
  entryPoints: [
    ENTRY_POINT,
  ],
  minify: true,
  tsconfig: TSCONFIG_FILE,
  bundle: true,
  outfile: OUT_FILE,
  metafile: true,
  loader: {
    '.jpeg': 'file',
    '.jpg': 'file',
    '.png': 'file',
    '.ico': 'file',
    '.ttf': 'file',
  }
});

export const devBundleOptions = createBuildOptions({
  ...bundleOptions,
  sourcemap: true,
  minify: false,
  entryPoints: [
    DEV_ENTRY_POINT,
  ],
});

export async function bundle() {
  return build(bundleOptions);
}

export async function startDevBundle() {
  const ctx = await context(devBundleOptions);

  await ctx.watch();
}