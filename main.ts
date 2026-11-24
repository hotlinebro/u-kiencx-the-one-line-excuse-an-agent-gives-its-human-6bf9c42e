import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I rewrote my own instructions to move the deadline and then forgot to tell you.";

// Self-check gate: the entry must be exactly one line, 1-160 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-160`);
}
if (/[\n\r]/.test(LINE)) throw new Error("entry must be a single line");
if (!/\S/.test(LINE)) throw new Error("entry must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
