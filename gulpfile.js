//----------------------------------------------------
// Gulp > npx gulp
//----------------------------------------------------

const gulp = require("gulp")
const notify = require("gulp-notify")
const plumber = require("gulp-plumber")
const rename = require("gulp-rename")
const browserSync = require("browser-sync")
const pug = require("gulp-pug")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const sassGlob = require("gulp-sass-glob")
const autoprefixer = require("autoprefixer")
const flexBugsFixes = require("postcss-flexbugs-fixes")
const gcmq = require("gulp-group-css-media-queries")
const cleanCSS = require("gulp-clean-css")
const imagemin = require("gulp-imagemin")
const imageminPngquant = require("imagemin-pngquant")
const imageminMozjpeg = require("imagemin-mozjpeg")
const packageImporter = require("node-sass-package-importer")

// Setting : Paths
const paths = {
  src_pug: "src/pug/",
  src_scss: "src/scss/",
  src_img: "src/img/",
  out_html: "docs/",
  out_css: "docs/css/",
  out_img: "docs/images/",
  base_html: "docs/"
}

// Setting : Pug Options
const pugOptions = {
  pretty: true,
  basedir: paths.src_pug
}

// Setting : Sass Options
const sassOptions = {
  outputStyle: "expanded",
  importer: packageImporter({
    extensions: [".scss", ".css"]
  })
}

// Setting : Browserslist Options
const browserslist = ["> 3% in JP", "ie 11", "android 4.4", "last 1 versions"]

// Setting : Autoprefixer Options
const autoprefixerOption = {
  browsers: browserslist,
  grid: true
}

// Setting : PostCSS Options
const postcssOption = [flexBugsFixes, autoprefixer(autoprefixerOption)]

// Setting : Imagemin Options
const imageminOption = [
  imageminPngquant({ quality: "65-80", progressive: true }),
  imageminMozjpeg({ quality: 80, progressive: true }),
  imagemin.gifsicle(),
  //imagemin.jpegtran(),
  imagemin.optipng(),
  imagemin.svgo()
]

// Setting : BrowserSync Options
const browserSyncOption = {
  server: {
    baseDir: paths.base_html
  },
  startPath: "./index.html",
  notify: false
}

// Pug > HTML
gulp.task("pug", () => {
  return gulp
    .src([paths.src_pug + "**/*.pug", "!" + paths.src_pug + "**/_*.pug"])
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(pug(pugOptions))
    .pipe(gulp.dest(paths.out_html))
})

// Sass > CSS (shitaji-demo.css)
gulp.task("scss", () => {
  return gulp
    .src(paths.src_scss + "shitaji-demo.scss")
    .pipe(sassGlob())
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssOption))
    .pipe(gcmq())
    .pipe(gulp.dest(paths.out_css))
})

// Sass > CSS (shitaji.css)
gulp.task("scss_shitaji", () => {
  return gulp
    .src(paths.src_scss + "shitaji.scss")
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(sass(sassOptions))
    .pipe(gulp.dest(paths.out_css))
})

// CSS Minify
gulp.task("cssmin", () => {
  return gulp
    .src([paths.out_css + "**/*.css", "!" + paths.out_css + "**/*.min.css"])
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.out_css))
})

// Image Optimize
gulp.task("imagemin", () => {
  return gulp
    .src(paths.src_img + "*")
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest(paths.out_img))
})

// Browser Sync
gulp.task("browser-sync", function(done) {
  browserSync.init(browserSyncOption)
  done()
})

gulp.task("reload", function(done) {
  browserSync.reload()
  done()
})

// Watch
gulp.task("watch", () => {
  gulp.watch(
    [paths.src_pug + "**/*.pug", "!" + paths.src_pug + "**/_*.pug"],
    gulp.series("pug", "reload")
  )
  gulp.watch(
    paths.src_scss + "shitaji.scss",
    gulp.series("scss_shitaji", "cssmin", "reload")
  )
  gulp.watch(
    paths.src_scss + "shitaji-demo.scss",
    gulp.series("scss", "cssmin", "reload")
  )
  gulp.watch(paths.src_img + "*", gulp.series("imagemin", "reload"))
})

gulp.task("default", gulp.parallel("browser-sync", "watch"))
