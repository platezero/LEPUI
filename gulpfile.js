const gulp = require("gulp");
const zip = require("gulp-zip");

// const shell = require("gulp-shell");

gulp.task("war", () =>
  gulp
    .src("dist/**")
    .pipe(zip("LEPUI.war"))
    .pipe(gulp.dest("war"))
);
