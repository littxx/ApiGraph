const gulp = require("gulp");
const rimraf = require("gulp-rimraf");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("script", () => {
  const tsResult = tsProject.src().pipe(tsProject());

  return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("static", () => {
  return gulp.src(["src/**/*.json"]).pipe(gulp.dest("dist"));
});

gulp.task("clean", () => {
  return gulp.src("dist", { read: false, allowEmpty: true }).pipe(rimraf());
});

gulp.task("build", gulp.series("clean", "static", "script"));

gulp.task(
  "watch",
  gulp.series("build", function watchTask() {
    gulp.watch(["src/**/*.ts", "src/**/*.json"], gulp.series("build"));
  })
);

// Tarefa padrão (default)
gulp.task("default", gulp.series("watch"));
