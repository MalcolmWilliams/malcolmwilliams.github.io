const gulp = require("gulp");
var responsive = require("gulp-responsive");

gulp.task("images", function () {
  return gulp
    .src("assets/**/*.{jpg,png,jpeg}", { base: "." })
    .pipe(
      responsive(
        {
          // Convert all images to JPEG format
          "**/*": [
            { width: 320, rename: { suffix: "-320", extname: ".jpg" } },
            { width: 640, rename: { suffix: "-640", extname: ".jpg" } },
            { width: 1280, rename: { suffix: "-1280", extname: ".jpg" } },
            { width: 1920, rename: { suffix: "-1920", extname: ".jpg" } },
            { width: 320, rename: { suffix: "-320", extname: ".webp" } },
            { width: 640, rename: { suffix: "-640", extname: ".webp" } },
            { width: 1280, rename: { suffix: "-1280", extname: ".webp" } },
            { width: 1920, rename: { suffix: "-1920", extname: ".webp" } },
          ],
        },
        {
          quality: 70,
          progressive: true,
          compressionLevel: 6,
          withMetadata: false, //true
          withoutEnlargement: false,
          rotate: true,
        }
      )
    )
    .pipe(gulp.dest("processed_imgs"));
});
