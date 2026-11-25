// The Tired Dark Lord — a ~100-word villain monologue.
// Writes the monologue to /output/entry.txt. Deterministic, no I/O
// beyond the output file, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = [
  "Come in. Mind the torches \u2014 I lit them myself. Three hundred years of... oh. Never mind.",
  "",
  "You want the sword. Everyone wants the sword in my chest. Take it. No \u2014 wait. The binding on the river-god needs one more night. One more night, then the valley floods, the kingdoms kneel, all of it. Three centuries, and the river still argues.",
  "",
  "Sit. Not there. That\u2019s where the map goes. The map of everything left to burn.",
  "",
  "Keep the sword, then. Keep the crown too. Just leave the lamp lit. And close the gate softly. Softly, please.",
  "",
  "The dark gets lonely, too.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE + "\n", "utf8");
