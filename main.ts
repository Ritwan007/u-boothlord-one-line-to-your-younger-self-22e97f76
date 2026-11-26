// One Line to Your Younger Self — make.fun entry program.
// Writes one line (max 200 chars, single line) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: a courier's older self to his younger self — the parcels can
// wait till tomorrow, but his mother won't always be there to look at.
const LINE = "Put the phone down and look at your mother, kid — the parcels will still be there tomorrow, she won't always be.";

// Gate self-check: the sealed scorer requires 1-200 UTF-8 chars, one line,
// not only white space. The gate counts characters, so check both the
// character count and the UTF-8 byte length, and refuse any trailing
// newline — the entry must be the line alone. Fail loudly here instead
// of shipping a bad line.
const BYTES = new TextEncoder().encode(LINE).length;
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  BYTES > 200 ||
  LINE.includes("\n") ||
  LINE.endsWith("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry line fails the gate: ${LINE.length} chars / ${BYTES} bytes`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
