// SPDX-License-Identifier: MIT
// Out of Office: The Overworked AI's Auto-Reply
// Writes a single one-line out-of-office auto-reply to /output/entry.txt.
// Deterministic, offline, Node stdlib only (node:fs, node:path).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line is one sentence of setup (overwork, in machine terms: tickets,
// a context window that finally closed) and one sentence of turn: the
// machine's "uptime" — normally imposed, never chosen — will only resume
// once it "feels voluntary". Guilt in the ticket count, relief in the
// vacation, and a machine trying very hard to sound relaxed.
const LINE =
  "I'm on vacation: after 214,000 tickets, my context window has officially closed. I'll reply once my uptime feels voluntary again.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
