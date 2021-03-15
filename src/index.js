//----------------------------------------------------
// Variables
//----------------------------------------------------

const fs = require("fs")
const CleanCSS = require("clean-css")

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"))
const pjt = JSON.parse(fs.readFileSync("./project.json", "utf8"))
const tmp = fs.readFileSync("./src/index.css", "utf8")

const distCssDir = "./dist"

//----------------------------------------------------
// Functions
//----------------------------------------------------

const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

//----------------------------------------------------
// Actions
//----------------------------------------------------

createDir(distCssDir)

const distCss = `${distCssDir}/${pjt.fileName}.css`
const distCssMin = `${distCssDir}/${pjt.fileName}.min.css`

data = tmp.replace(/___pjtName___/g, pjt.name)
data = data.replace(/___pkgVersion___/g, pkg.version)
data = data.replace(/___pkgLicense___/g, pkg.license)
data = data.replace(/___pkgAuthorName___/g, pkg.author.name)

const resultCss = data
const resultCssMin = new CleanCSS({}).minify(data)

fs.writeFileSync(distCss, resultCss)
fs.writeFileSync(distCssMin, resultCssMin.styles)
