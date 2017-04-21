/**
 * node modules
 */
var
gulp         = require("gulp"),
sass         = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer"),
csscomb      = require("gulp-csscomb"),
mmq 		 = require("gulp-merge-media-queries"),
plumber      = require("gulp-plumber");

/**
 * Configuration for back-end development with gulp
 * @type {json}
 */
var settings = require("./gulpfile.config.js");

/**
 * Gulp functions
 */
function compiledSass ()
{
	return gulp.src(settings.sassdir + "/**/*.scss")
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit("end");
			}
		}))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(csscomb())
		.pipe(mmq({
			log: true
		}))
		.pipe(gulp.dest(settings.cssdir));
};
function sassWatch ()
{
	gulp.watch(settings.sassdir + "/**/*.scss", ['sass']);
};

/**
 * Gulp tasks
 */
gulp.task('sass', compiledSass);
gulp.task('sass-watch', sassWatch);
