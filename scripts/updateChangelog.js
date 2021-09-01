'use strict';

const fs = require('fs');

const version = process.env.npm_package_version
    ? process.env.npm_package_version
    : process.argv[2];

if (!version) {
    throw "No version defined";
}

let today = (new Date()).toISOString().split('T')[0];

fs.readFile('CHANGELOG.md', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    var body = data.match(/## \[Unreleased\]\s+(.*?)\s*##/s);
    fs.writeFile('out/RELEASE.md', body[1], 'utf8', function (err) {
        if (err) {
            throw err;
        }
    });

    fs.writeFile('out/version.txt', version, 'utf8', function (err) {
        if (err) {
            throw err;
        }
    });

    var result = data.replace(/## \[Unreleased\]/, `## [Unreleased]\n\n## [${version}] - ${today}`);
    result = result.replace(
        /(\[Unreleased\]\: )(https\:\/\/github.com\/.*?\/compare\/)(v\d+\.\d+\.\d+)(\.{3})(HEAD)/,
        "$1$2v" + version + "$4$5\n[" + version + "]: $2$3$4v" + version
    );

    fs.writeFile('CHANGELOG.md', result, 'utf8', function (err) {
        if (err) {
            throw err;
        }
    });
});