# Change Log

All notable changes to the "php-docblocker" extension will be documented in this file.

## [Unreleased]

## [2.4.6] - 2021-09-15
### Added
- A presentation to the D3R Team on GitHub workflows
### Updated
- The D3R Team on how we can use GitHub actions
### Removed
- Anxiety about GitHub actions

## [2.4.5] - 2021-09-15
- Test
- Test2 
- Test3

## [2.4.4] - 2021-09-15
### Added
- A presentation to the D3R Team on GitHub workflows
### Updated
- The D3R Team on how we can use GitHub actions
### Removed
- Anxiety about GitHub actions

## [2.4.3] - 2021-09-15
### Added
- A presentation to the D3R Team on GitHub workflows
### Updated
- The D3R Team on how we can use GitHub actions
### Removed
- Anxiety about GitHub actions

## [2.4.2] - 2021-09-15
- Add should to list of bool return type functions - Thanks @ImClarky
- Fix issue where functions named with a bool return prefix were incorrectly given bool return type - Thanks @ImClarky
- Fix issue with snake case class names in PHP7 return types - Thanks @rmccue

## [2.4.1] - 2021-09-15
### Added
- A presentation to the D3R Team on GitHub workflows
### Updated
- The D3R Team on how we can use GitHub actions
### Removed
- Anxiety about GitHub actions

## [2.4.0] - 2021-09-15

## [2.3.12] - 2021-09-07

## [2.3.11] - 2021-09-07
- Add should to list of bool return type functions - Thanks @ImClarky
- Fix issue where functions named with a bool return prefix were incorrectly given bool return type - Thanks @ImClarky
- Fix issue with snake case class names in PHP7 return types - Thanks @rmccue

## [2.3.10] - 2021-09-05
- Add should to list of bool return type functions - Thanks @ImClarky
- Fix issue where functions named with a bool return prefix were incorrectly given bool return type - Thanks @ImClarky
- Fix issue with snake case class names in PHP7 return types - Thanks @rmccue

## [2.3.9] - 2021-09-04
- Add caching of node modules folder - Thanks @neild3r

## [2.3.8] - 2021-09-01

## [2.3.7] - 2021-09-01

## [2.3.6] - 2021-09-01
- Test release notes here
- Test blah blah blah

## [2.3.5] - 2021-09-01

## [2.3.4] - 2021-09-01
- Add support for PHP8 union types in function params - Thanks @tianyiw2013
- Add support for PHP8 union types in function return types - Thanks @tianyiw2013
- Add support for PHP8 union types in class properties - Thanks @tianyiw2013
- Switched build checks system to GitHub actions

## [2.3.3] - 2021-09-01
- Add support for PHP8 union types in function params - Thanks @tianyiw2013
- Add support for PHP8 union types in function return types - Thanks @tianyiw2013
- Add support for PHP8 union types in class properties - Thanks @tianyiw2013
- Switched build checks system to GitHub actions

## [2.3.2] - 2021-09-01

## [2.3.1] - 2021-09-01

## [2.3.0] - 2021-10-23
- Add support for PHP8 union types in function params - Thanks @tianyiw2013
- Add support for PHP8 union types in function return types - Thanks @tianyiw2013
- Add support for PHP8 union types in class properties - Thanks @tianyiw2013
- Switched build checks system to GitHub actions

## [2.2.3] - 2021-10-18
- Remove usage of FS module to fix start up errors in vscode web

## [2.2.2] - 2021-10-18
- Improve compatability with vscode web

## [2.2.1] - 2021-10-17
- Supported workspace trust - Thanks @tianyiw2013
- Add case insensitive matching - Thanks @tianyiw2013
- Improve detection of types from certain default values - Thanks @tianyiw2013

## [2.2.0] - 2021-10-11
- Use esbuild to improve startup performance
- Add support for PHP 7.4 typed properties
- Fix issue where if you have a comma in a default value it incorrectly splits the arguments

## [2.1.0] - 2019-11-19
- Add should to list of bool return type functions - Thanks @ImClarky
- Fix issue where functions named with a bool return prefix were incorrectly given bool return type - Thanks @ImClarky
- Fix issue with snake case class names in PHP7 return types - Thanks @rmccue

## [2.0.1] - 2019-07-08
- Fix issue in templating system where custom order was not being honored

## [2.0.0] - 2019-06-30
- Add templating system to handle how DocBlocks are created. While not strictly a breaking change it is a major update so this is why it has been released as 2.0.0

## [1.9.0] - 2019-06-30
- Add PHPUnit annotations to docblock completions - Thanks @goodjack

## [1.8.0] - 2019-03-13
- Add a command to trigger DocBlocking
- Update configuration description around short names - Thanks @dave470003

## [1.7.0] - 2018-12-23
- Add description to snippet to avoid confusion 
- Add option to turn of void return type when the return could not be detected
- Remove tabstop on variable names generating DocBlocks - Thanks @markjaquith

## [1.6.0] - 2018-03-26
- Add configuration option to full qualify class names in param and returns
- Rework internal config value fetching to allow better testing

## [1.5.0] - 2018-03-24
- Add author configuration so the Author tag pulls in your name/email
- Add returnGap option which adds a space between your @params and @return tags
- Add list of completion tags to the README.md

## [1.4.0] - 2018-03-23
- Allow using vscode variables in your extra tags see list of variables [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables) for the docs 

## [1.3.3] - 2017-12-22
- Fixed typo in readme. - Thanks Dominik Liebler
- Fixed missing canDo return type - Thanks @jens1o
- Fixed transforming short names with PHP7 typehints into their long form when useShortNames is false

## [1.3.2] - 2017-10-07
- Improve compatibility with vscode v1.17 by resolving the issue with the snippet end being before the closing */

## [1.3.1] - 2017-10-06
- Fix compatibility issues with vscode v1.17 now language config has been merged into the core

## [1.3.0] - 2017-09-29
- Add basic HHVM/Hack support - Thanks @beefsack
- Change @method snippet to not include a $ - Thanks @ADmad
- Fix issue when using a referenced function

## [1.2.0] - 2017-05-26
- Add support for PHP7.1 nullable types
- Add config option to allow enforcing short named return types. Thanks @jens1o

## [1.1.0] - 2017-05-20
- Add extra snippets. Thanks @jens1o

## [1.0.0] - 2017-04-20
- Add support for ...$args
- Support PHP7 return types
- Infer boolean return type for methods that start is or has
- Add more @ tags from the PHPDoc documentation
- Fix issue with function typehints using namespaces

## [0.4.2] - 2017-03-31
- Fix travis not getting the right status code back when tests fail
- Fix issue where completion @ tags weren't matching properly

## [0.4.1] - 2017-03-29
- Fix for issue causing built in php intellisense to be broken
- Add code coverage to CI and more unit tests to get full code coverage

## [0.4.0] - 2017-03-17
- Add Inferring of types in properties
- Add Inferring of types using function param defaults
- Fix issue where function parameters passed by reference fail to parse

## [0.3.3] - 2017-03-16
- Fix matching of multiline class properties
- Fix the falling back to a simple block
- Fix issue with multiline arguments with type hints
- Fix `@param` completion spitting out `@var`
- Fix Interface class not triggering
- Refactor unit tests and add more checks and a more comprehensive realworld test

## [0.3.2] - 2017-03-15
- Fixed overflow of function capture meaning it was being applied to properties

## [0.3.1] - 2017-03-15
- Fixed regression in functions without params not triggering

## [0.3.0] - 2017-03-15
- Added unit tests for function signatures and continuous integration
- Added `@package` to completions
- Fixed issue where functions weren't detected in abstract/interface methods
- Fixed support for multiline function signatures

## [0.2.0] - 2017-03-13
- Refactored for potential unit testing
- Switched to use a completion snippet for the main docblock
- Fix bug with function that has no params

## [0.1.1] - 2017-03-12
- Updated readme and display name

## 0.1.0 - 2017-03-12
- Initial release

[Unreleased]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.6...HEAD
[2.4.6]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.5...v2.4.6
[2.4.5]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.4...v2.4.5
[2.4.4]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.3...v2.4.4
[2.4.3]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.2...v2.4.3
[2.4.2]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.1...v2.4.2
[2.4.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.12...v2.4.0
[2.3.12]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.11...v2.3.12
[2.3.11]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.10...v2.3.11
[2.3.10]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.9...v2.3.10
[2.3.9]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.8...v2.3.9
[2.3.8]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.7...v2.3.8
[2.3.7]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.6...v2.3.7
[2.3.6]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.5...v2.3.6
[2.3.5]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.4...v2.3.5
[2.3.4]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.3...v2.3.4
[2.3.3]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.2...v2.3.3
[2.3.2]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.1...v2.3.2
[2.3.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.2.3...v2.3.0
[2.2.3]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.2.2...v2.2.3
[2.2.2]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.9.0...v2.0.0
[1.9.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.8.0...v1.9.0
[1.8.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.3.3...v1.4.0
[1.3.3]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.4.2...v1.0.0
[0.4.2]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.3.3...v0.4.0
[0.3.3]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.1.1...v0.2.0
[0.2.0]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/neild3r/vscode-php-docblocker/compare/v0.1.0...v0.1.1
