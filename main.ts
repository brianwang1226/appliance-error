// The Funniest Honest Appliance Error — a one-liner for make.fun.
// The entry is the toaster's brutally honest error message: it burned
// the bread, blames the user for cranking it to 6, and refuses to apologize.
// No "please try again later", no fake sympathy — just a small kitchen
// appliance standing its ground and telling the truth for once.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "Error: the toaster burned your bread and blames you for setting it to 6. It will not apologize.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
