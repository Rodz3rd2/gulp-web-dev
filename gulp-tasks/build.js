/**
 * Gulp plugins
 */
var
gulp 		= require("gulp"),
useref      = require("gulp-useref"),
uglify      = require("gulp-uglify"),
gulpIf      = require("gulp-if"),
cssnano     = require("gulp-cssnano"),
imagemin    = require("gulp-imagemin"),
cache       = require("gulp-cache"),
flatten 	= require("gulp-flatten"),
runSequence = require("run-sequence"),
del 		= require("del")
;

/**
 * Settings
 */
var settings = require("./gulpfile.config.js");

function bundledAsset ()
{
	return gulp.src(settings.twigdir + "/**/*.twig")
			.pipe(useref())
			.pipe(gulpIf('*.js', uglify()))
			.pipe(gulpIf('*.css', cssnano()))
			.pipe(gulp.dest(settings.basedir + "/dist"));
}

function optimizeImages ()
{
	return gulp.src(settings.basedir + "/img/**/*.+(png|jpg|jpeg|gif|svg)")
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest(settings.basedir + "/dist/img"));
}

function flattenFonts ()
{
	return gulp.src([
			settings.basedir + "/**/*.eot",
			settings.basedir + "/**/*.svg",
			settings.basedir + "/**/*.ttf",
			settings.basedir + "/**/*.woff",
			settings.basedir + "/**/*.woff2",
			settings.basedir + "/**/*.otf",
		])
		.pipe(flatten())
		.pipe(gulp.dest(settings.basedir + "/dist/fonts"));
}

function deleteDist ()
{
	del.sync(settings.basedir + "/dist");
}

function build (callback)
{
	runSequence('delete-dist',
		['useref',
		'optimize-images',
		'flatten-fonts'],
		callback);
}

gulp.task('useref', bundledAsset);
gulp.task('optimize-images', optimizeImages);
gulp.task('flatten-fonts', flattenFonts);
gulp.task('delete-dist', deleteDist);
gulp.task('build', function (callback)
{
	build(callback);
});
