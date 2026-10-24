import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const groups = ["creational", "structural", "behavioral"];

for (const group of groups) {
  const dir = join("src", group);
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts")).sort()) {
    console.log(`\n========== ${group}/${file} ==========`);
    execFileSync(process.execPath, ["--import", "tsx", join(dir, file)], { stdio: "inherit" });
  }
}
