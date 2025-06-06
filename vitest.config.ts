import GithubActionsReporter from "vitest-github-actions-reporter";
import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  test: {
    /**
     * `restoreMocks` accomplishes the following:
     * - clears all spies of `spy.mock.calls` and `spy.mock.results` (same as clearMocks:true)
     * - removes any mocked implementations (same as mockReset:true)
     * - restores the original implementation so fns don't return undefined like with mockReset
     */
    restoreMocks: true,
    globals: true,
    silent: true,
    passWithNoTests: true, // For test-related utils in *.test.ts files
    environment: "node",
    include: ["**/?(*.)test.ts"],
    reporters: ["default", ...(process.env.GITHUB_ACTIONS ? [new GithubActionsReporter()] : [])],
    coverage: {
      include: ["src/**/*.ts"],
      exclude: [...coverageConfigDefaults.exclude, "**/index.ts"],
      reporter: [
        ...coverageConfigDefaults.reporter,
        "json-summary", // <-- used by vitest-coverage-report GitHub Action
      ],
    },
  },
});
