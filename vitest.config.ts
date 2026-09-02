import path from 'node:path';
import { defineConfig } from 'vitest/config';

// Pin the suite's timezone BEFORE anything constructs a Date.
//
// src/lib/date-formats.ts deliberately renders every timestamp in
// Europe/Zurich (without it, a server-rendered 15:00 workshop shows 1-2h off).
// Tests then build reference dates with `new Date(2026, 4, 15, 14, 30)`, which
// is the RUNNER's local time — so the same assertion means "14:30" on a Swiss
// laptop and "16:30" on a UTC CI runner. Six date tests were failing on every
// CI run for exactly this reason, invisibly, because the job discarded its own
// result. Pinning here rather than in each npm script keeps one source of
// truth: every vitest invocation loads this config (imports are hoisted, so
// nothing test-related runs earlier), and vitest's worker processes inherit
// the env set at config-load time.
process.env.TZ = 'Europe/Zurich';

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  resolve: {
    // Mirrors the old jest moduleNameMapper. ORDER MATTERS: specific entries
    // must come before the '@/' catch-all, so this stays an array (object
    // form does not guarantee order).
    alias: [
      // next-intl is globally replaced by the mock — including through
      // vi.importActual, exactly like jest's moduleNameMapper resolved
      // jest.requireActual('next-intl') to the mock file. Tests that spread
      // "the actual module" rely on the mock's defineRouting/createNavigation.
      { find: /^next-intl(\/.*)?$/, replacement: r('__mocks__/next-intl.js') },
      { find: /^saldo-engine$/, replacement: r('packages/saldo/src/index.ts') },
      { find: /^@\//, replacement: r('src') + '/' },
    ],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    // 30s, matching the OrangeCat conversion. A handful of legitimately
    // heavy tests (repo-wide message scans, bcrypt rounds) sit right at
    // vitest's 5s default when 4 workers share the CPU — and the it-hilfe
    // suites' setup hooks similarly cross the 10s hook default under load.
    testTimeout: 30000,
    hookTimeout: 30000,
    include: ['src/**/__tests__/**/*.{js,jsx,ts,tsx}', 'src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: [
      '**/node_modules/**',
      '.next/**',
      'cms-api/**',
      // Parallel-session worktrees carry their own copies of the suite;
      // without this they would pollute the run.
      '.claude/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.d.ts',
        'src/pages/_app.tsx',
        'src/pages/_document.tsx',
        'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
        'src/**/__tests__/**',
      ],
    },
  },
});
