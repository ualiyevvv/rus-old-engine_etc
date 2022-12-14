<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\HttpFoundation;

use Symfony\Component\Routing\RequestContext;

/**
 * A helper service for manipulating URLs within and outside the request scope.
 *
 * @author Valentin Udaltsov <udaltsov.valentin@gmail.com>
 */
final class UrlHelper
{
    private $requestStack;
    private $requestContext;

    public function __construct(RequestStack $requestStack, RequestContext $requestContext = null)
    {
        $this->requestStack = $requestStack;
        $this->requestContext = $requestContext;
    }

    public function getAbsoluteUrl(string $path): string
    {
        if (false !== strpos($path, '://') || '//' === substr($path, 0, 2)) {
            return $path;
        }

        if (null === $request = $this->requestStack->getMasterRequest()) {
            return $this->getAbsoluteUrlFromContext($path);
        }

        if ('#' === $path[0]) {
            $path = $request->getRequestUri().$path;
        } elseif ('?' === $path[0]) {
            $path = $request->getPathInfo().$path;
        }

        if (!$path || '/' !== $path[0]) {
            $prefix = $request->getPathInfo();
            $last = \strlen($prefix) - 1;
            if ($last !== $pos = strrpos($prefix, '/')) {
                $prefix = substr($prefix, 0, $pos).'/';
            }

            return $request->getUriForPath($prefix.$path);
        }

        return $request->getSchemeAndHttpHost().$path;
    }

    public function getRelativePath(string $path): string
    {
        if (false !== strpos($path, '://') || '//' === substr($path, 0, 2)) {
            return $path;
        }

        if (null === $request = $this->requestStack->getMasterRequest()) {
            return $path;
        }

        return $request->getRelativeUriForPath($path);
    }

    private function getAbsoluteUrlFromContext(string $path): string
    {
        if (null === $this->requestContext || '' === $host = $this->requestContext->getHost()) {
            return $path;
        }

        $scheme = $this->requestContext->getScheme();
        $port = '';

        if ('http' === $scheme && 80 !== $this->requestContext->getHttpPort()) {
            $port = ':'.$this->requestContext->getHttpPort();
        } elseif ('https' === $scheme && 443 !== $this->requestContext->getHttpsPort()) {
            $port = ':'.$this->requestContext->getHttpsPort();
        }

        if ('#' === $path[0]) {
            $queryString = $this->requestContext->getQueryString();
            $path = $this->requestContext->getPathInfo().($queryString ? '?'.$queryString : '').$path;
        } elseif ('?' === $path[0]) {
            $path = $this->requestContext->getPathInfo().$path;
        }

        if ('/' !== $path[0]) {
            $path = rtrim($this->requestContext->getBaseUrl(), '/').'/'.$path;
        }

        return $scheme.'://'.$host.$port.$path;
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
//const htmlmin = require("gulp-htmlmin");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
})

gulp.task('html', function() {
    return gulp.src("src/*.html")
   //     .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
})

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
})
gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
})
gulp.task('icons', function() {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
})
gulp.task('mailer', function() {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
})
gulp.task('images', function() {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
})
gulp.task('newstyles', function() {
    return gulp.src("src/css/**/*")
        .pipe(gulp.dest("dist/css"));
})

gulp.task('default', gulp.parallel('watch', 'server', 'mailer', 'icons', 'fonts', 'scripts', 'images', 'styles', 'newstyles', 'html'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       {
  "_from": "cross-spawn@^5.0.1",
  "_id": "cross-spawn@5.1.0",
  "_inBundle": false,
  "_integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
  "_location": "/bin-check/cross-spawn",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "cross-spawn@^5.0.1",
    "name": "cross-spawn",
    "escapedName": "cross-spawn",
    "rawSpec": "^5.0.1",
    "saveSpec": null,
    "fetchSpec": "^5.0.1"
  },
  "_requiredBy": [
    "/bin-check/execa"
  ],
  "_resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
  "_shasum": "e8bd0efee58fcff6f8f94510a0a554bbfa235449",
  "_spec": "cross-spawn@^5.0.1",
  "_where": "C:\\projects\\repairs\\node_modules\\bin-check\\node_modules\\execa",
  "author": {
    "name": "IndigoUnited",
    "email": "hello@indigounited.com",
    "url": "http://indigounited.com"
  },
  "bugs": {
    "url": "https://github.com/IndigoUnited/node-cross-spawn/issues/"
  },
  "bundleDependencies": false,
  "dependencies": {
    "lru-cache": "^4.0.1",
    "shebang-command": "^1.2.0",
    "which": "^1.2.9"
  },
  "deprecated": false,
  "description": "Cross platform child_process#spawn and child_process#spawnSync",
  "devDependencies": {
    "@satazor/eslint-config": "^3.0.0",
    "eslint": "^3.0.0",
    "expect.js": "^0.3.0",
    "glob": "^7.0.0",
    "mkdirp": "^0.5.1",
    "mocha": "^3.0.2",
    "once": "^1.4.0",
    "rimraf": "^2.5.0"
  },
  "files": [
    "index.js",
    "lib"
  ],
  "homepage": "https://github.com/IndigoUnited/node-cross-spawn#readme",
  "keywords": [
    "spawn",
    "spawnSync",
    "windows",
    "cross",
    "platform",
    "path",
    "ext",
    "path-ext",
    "path_ext",
    "shebang",
    "hashbang",
    "cmd",
    "execute"
  ],
  "license": "MIT",
  "main": "index.js",
  "name": "cross-spawn",
  "repository": {
    "type": "git",
    "url": "git://github.com/IndigoUnited/node-cross-spawn.git"
  },
  "scripts": {
    "lint": "eslint '{*.js,lib/**/*.js,test/**/*.js}'",
    "test": "node test/prepare && mocha --bail test/test"
  },
  "version": "5.1.0"
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <?php

/*
 * This file is part of Psy Shell.
 *
 * (c) 2012-2020 Justin Hileman
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Psy\Exception;

/**
 * A "fatal error" Exception for Psy.
 */
class FatalErrorException extends \ErrorException implements Exception
{
    private $rawMessage;

    /**
     * Create a fatal error.
     *
     * @param string          $message  (default: "")
     * @param int             $code     (default: 0)
     * @param int             $severity (default: 1)
     * @param string|null     $filename (default: null)
     * @param int|null        $lineno   (default: null)
     * @param \Exception|null $previous (default: null)
     */
    public function __construct($message = '', $code = 0, $severity = 1, $filename = null, $lineno = null, $previous = null)
    {
        // Since these are basically always PHP Parser Node line numbers, treat -1 as null.
        if ($lineno === -1) {
            $lineno = null;
        }

        $this->rawMessage = $message;
        $message = \sprintf('PHP Fatal error:  %s in %s on line %d', $message, $filename ?: "eval()'d code", $lineno);
        parent::__construct($message, $code, $severity, $filename, $lineno, $previous);
    }

    /**
     * Return a raw (unformatted) version of the error message.
     *
     * @return string
     */
    public function getRawMessage()
    {
        return $this->rawMessage;
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 INDX( 	 I?#           (   (  ?       &                     ??   [ h X     ??   & ?}??R?????R?????R??????\?        c              A d d r e s s . p h p ??   A h X     ??   & x???R?x???R?x???R??O???\?        ?              C o m p a n y . p h p ??   y p Z     ??   & Yg??R?Yg??R?Yg??R??????\?@      ?              I n t e r n e t . p h p       ??   $ h X     ??   & >???R?9???R?9???R??????\??      ?              P a y m e n t . p h p ??    h V     ??    Q??R?Q??R?Q??R?????\? P      ?A              
P e r s o n . p h p   ??    p `     ??   & r??R?z???R?z???R??=???\?       3	              P h o n e N u m b e r . p h p ??    p Z     ??   & r??R?z???R?z???R??=???\?       3	              P H O N E N ~ 1 . P H P                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <?php

namespace Faker\Provider\fi_FI;

class PhoneNumber extends \Faker\Provider\PhoneNumber
{
    /**
     * @link https://www.viestintavirasto.fi/en/internettelephone/numberingoftelecommunicationsnetworks/localcallsandtelecommunicationsareas/mapoftelecommunicationsareas.html
     * @var array
     */
    protected static $landLineareaCodes = array(
        '02',
        '03',
        '05',
        '06',
        '08',
        '09',
        '013',
        '014',
        '015',
        '016',
        '017',
        '018',
        '019',
    );

    /**
     * @link https://www.viestintavirasto.fi/en/internettelephone/numberingoftelecommunicationsnetworks/mobilenetworks/mobilenetworkareacodes.html
     * @var array
     */
    protected static $mobileNetworkAreaCodes = array(
        '040',
        '050',
        '044',
        '045',
    );

    protected static $numberFormats = array(
        '### ####',
        '#######',
    );

    protected static $formats = array(
        '+358 ({{ e164MobileNetworkAreaCode }}) {{ numberFormat }}',
        '+358 {{ e164MobileNetworkAreaCode }} {{ numberFormat }}',
        '+358 ({{ e164landLineAreaCode }}) {{ numberFormat }}',
        '+358 {{ e164landLineAreaCode }} {{ numberFormat }}',
        '{{ mobileNetworkAreaCode }}{{ separator }}{{ numberFormat }}',
        '{{ landLineAreaCode }}{{ separator }}{{ numberFormat }}',
    );

    /**
     * @return string
     */
    public function landLineAreaCode()
    {
        return static::randomElement(static::$landLineareaCodes);
    }

    /**
     * @return string
     */
    public function e164landLineAreaCode()
    {
        return substr(static::randomElement(static::$landLineareaCodes), 1);
    }

    /**
     * @return string
     */
    public function mobileNetworkAreaCode()
    {
        return static::randomElement(static::$mobileNetworkAreaCodes);
    }

    /**
     * @return string
     */
    public function e164MobileNetworkAreaCode()
    {
        return substr(static::randomElement(static::$mobileNetworkAreaCodes), 1);
    }

    /**
     * @return string
     */
    public function numberFormat()
    {
        return static::randomElement(static::$numberFormats);
    }

    /**
     * @return string
     */
    public function separator()
    {
        return static::randomElement(array(' ', '-'));
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             {
    "name": "symfony/http-foundation",
    "type": "library",
    "description": "Defines an object-oriented layer for the HTTP specification",
    "keywords": [],
    "homepage": "https://symfony.com",
    "license": "MIT",
    "authors": [
        {
            "name": "Fabien Potencier",
            "email": "fabien@symfony.com"
        },
        {
            "name": "Symfony Community",
            "homepage": "https://symfony.com/contributors"
        }
    ],
    "require": {
        "php": ">=7.2.5",
        "symfony/deprecation-contracts": "^2.1",
        "symfony/polyfill-mbstring": "~1.1",
        "symfony/polyfill-php80": "^1.15"
    },
    "require-dev": {
        "predis/predis": "~1.0",
        "symfony/cache": "^4.4|^5.0",
        "symfony/mime": "^4.4|^5.0",
        "symfony/expression-language": "^4.4|^5.0"
    },
    "suggest" : {
        "symfony/mime": "To use the file extension guesser"
    },
    "autoload": {
        "psr-4": { "Symfony\\Component\\HttpFoundation\\": "" },
        "exclude-from-classmap": [
            "/Tests/"
        ]
    },
    "minimum-stability": "dev"
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              