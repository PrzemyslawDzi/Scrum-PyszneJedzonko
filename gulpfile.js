var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

gulp.task("watch", function(cb) {
  gulp.watch("development/scss/**/*.scss", gulp.series("sass"));
  cb();
});

gulp.task("serve", function(cb) {
  browserSync.init({
    server: "./development"
  });
  gulp.watch("development/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("development/*.html").on("change", browserSync.reload);
  gulp.watch("development/js/*.js").on("change", browserSync.reload);
  cb();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp
    .src("development/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        overrideBrowserslist: [
          "> 1%",
          "ie >= 8",
          "edge >= 15",
          "ie_mob >= 10",
          "ff >= 45",
          "chrome >= 45",
          "safari >= 7",
          "opera >= 23",
          "ios >= 7",
          "android >= 4",
          "bb >= 10"
        ]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("development/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("serve"));
