/**
 * vite-plugin-token-imports.js
 * ─────────────────────────────────────────────────────────────────
 * Vite plugin that runs the token-import check before every production
 * build.  When a stale import is detected the build exits non-zero with
 * a clear error message — no separate CI step required.
 *
 * Behaviour:
 *   • Active only during `vite build` (apply: "build").
 *   • Runs check-token-imports.js in a child process so its stdio is
 *     forwarded directly to the terminal.
 *   • Throws a Rollup error if the check exits non-zero, which causes
 *     Vite to abort the bundle with a non-zero exit code.
 * ─────────────────────────────────────────────────────────────────
 */

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHECK_SCRIPT = join(__dirname, "check-token-imports.js");

/**
 * Returns a Vite plugin that validates token imports before the build.
 *
 * @returns {import("vite").Plugin}
 */
export function tokenImportsPlugin() {
  return {
    name: "token-imports-check",

    // Only run during `vite build`, not `vite dev` or `vite preview`.
    apply: "build",

    buildStart() {
      const result = spawnSync(process.execPath, [CHECK_SCRIPT], {
        stdio: "inherit",
        env: process.env,
      });

      if (result.error) {
        // Child process could not be spawned at all.
        this.error(
          `token-imports-check: failed to run check script — ${result.error.message}`,
        );
      }

      if (result.status !== 0) {
        // check-token-imports.js already printed the stale-reference details.
        this.error(
          "token-imports-check: stale token references found — build aborted.\n" +
            "Fix the references listed above, then rebuild.",
        );
      }
    },
  };
}
