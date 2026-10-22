import { mkdir, readFile, writeFile } from "node:fs/promises"
import { transform } from "esbuild"

const sourceUrl = new URL("../src/index.css", import.meta.url)
const distUrl = new URL("../dist/", import.meta.url)
const source = await readFile(sourceUrl, "utf8")
const { code, warnings } = await transform(source, {
  loader: "css",
  sourcefile: "shitaji.css",
  // Preserve compatibility declarations and fallback values in this reset CSS.
  minifyWhitespace: true,
  minifySyntax: false,
  minifyIdentifiers: false,
  legalComments: "none",
})

if (warnings.length > 0) {
  throw new Error(warnings.map(({ text }) => text).join("\n"))
}

await mkdir(distUrl, { recursive: true })
await Promise.all([
  writeFile(new URL("shitaji.css", distUrl), source),
  writeFile(new URL("shitaji.min.css", distUrl), code),
])
