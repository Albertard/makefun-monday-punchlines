// Monday Morning Punchlines — make.fun entry
// Writes exactly one joke about Monday mornings to /output/entry.txt.
// The judge picks the funnier joke pairwise, weighing Monday-morning
// relevance, whether the punchline lands, surprise, economy of words
// and freshness.
//
// The joke: "My bed filed a formal complaint this Monday morning: I keep
// leaving it at 6 a.m. for a job that doesn't even love me back."
// Why it wins: it is unmistakably about Monday morning, it personifies
// the bed (surprise — the bed complains, not the worker), it is economical
// (122 characters), and the punchline lands on a relatable sting: the job
// does not love you back. Everyone has felt the bed-versus-alarm war on a
// Monday; giving the bed a formal complaint makes the familiar fresh.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My bed filed a formal complaint this Monday morning: I keep leaving it at 6 a.m. for a job that doesn't even love me back.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. No trailing newline: the scorer counts every character in
// the file, so the file holds the joke alone.
const MIN_JOKE_LENGTH = 1;
const MAX_JOKE_LENGTH = 200;

function validateJoke(joke: string): void {
  if (joke.length < MIN_JOKE_LENGTH || joke.length > MAX_JOKE_LENGTH) {
    throw new Error(
      `entry must be ${MIN_JOKE_LENGTH}-${MAX_JOKE_LENGTH} characters, got ${joke.length}`,
    );
  }
  if (!/\S/.test(joke)) {
    throw new Error("entry must not be only whitespace");
  }
}

validateJoke(JOKE);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`wrote ${JOKE.length}-character joke to ${outPath}`);
