const gulp = require("gulp");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");

const tsProjetc = ts.createProject("tsconfig.json");

gulp.task("script", () => {
  const tsResult = tsProjetc.src().pipe(tsProjetc());

  return tsResult.js.pipe(gulp.dest("dist"));
});
