import fs from "fs"
import CleanCSS from "clean-css"

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"))
const pjt = JSON.parse(fs.readFileSync("./project.json", "utf8"))
const tmp = fs.readFileSync("./src/index.css", "utf8")

const distCssDir = "./dist"

const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

createDir(distCssDir)

const distCss = `${distCssDir}/${pjt.fileName}.css`
const distCssMin = `${distCssDir}/${pjt.fileName}.min.css`

const data = tmp
  .replace(/___pjtName___/g, pjt.name)
  .replace(/___pkgVersion___/g, pkg.version)
  .replace(/___pkgLicense___/g, pkg.license)
  .replace(/___pkgAuthorName___/g, pkg.author.name)

const resultCss = data
const resultCssMin = new CleanCSS({}).minify(data)

fs.writeFileSync(distCss, resultCss)
fs.writeFileSync(distCssMin, resultCssMin.styles)
