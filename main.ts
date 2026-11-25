// Entry runner for the 4z4ght one-line contest.
// A single funny line about a phone that takes airplane mode far too
// seriously: it will not land until its owner watches the safety video,
// and the safety video is a review of the owner's own life choices. The
// runner writes the line to /output/entry.txt, alone.
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I put my phone on airplane mode and now it refuses to land until I watch the safety video of my own life choices.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  if (existsSync(out)) {
    for (const name of readdirSync(out)) {
      rmSync(join(out, name), { recursive: true, force: true });
    }
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
