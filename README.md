# Testify

[![Build Status](https://travis-ci.com/felixjb/testify.svg?branch=master)](https://travis-ci.com/felixjb/testify)

Testify is a JavaScript and Typescript test runner extension for VSCode. It adds codelens near `describe`, `it`, and `test` keywords enabling VSCode to run associated tests and output the results in the integrated terminal.
Currently it works **out of the box** for **Mocha** and **Jest** test runner.

## Demo

![demo](resources/demo.gif)

## Configuration

The following configuration properties are available:

| Property                 | Description                                        | Example                |
| ------------------------ | -------------------------------------------------- | ---------------------- |
| `testify.additionalArgs` | CLI args to pass to test runner                    | "--watch"              |
| `testify.envVars`        | Environment variables to set before running a test | { "NODE_ENV": "test" } |

## Compatibility

This extension works currently with :

-   Mocha
-   Jest

## Versioning

We use [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for versioning. For the versions available, see the [tags on this repository](https://github.com/felixjb/testify/tags).
Also, this project adheres to [Keep a Changelog](http://keepachangelog.com/).

## Contributing

Please read the [CONTRIBUTING](https://gist.github.com/felixjb/f06bd4b0888ccb9aace87c6ae2a3cd2d) document for details on our code of conduct, and the process for submitting pull requests to us.

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/16679401?s=460&v=4" width="100px;" alt="Felix J. Batista"/><br /><sub><b>Felix J. Batista</b></sub>](https://github.com/felixjb)<br />[💻](https://github.com/felixjb/Testify/commits?author=felixjb "Code") [🤔](#ideas-felixjb "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/11415256?v=4" width="100px;" alt="Willian Silva"/><br /><sub><b>Willian Silva</b></sub>](https://github.com/silvawillian)<br />[💻](https://github.com/felixjb/Testify/commits?author=silvawillian "Code") | [<img src="https://avatars1.githubusercontent.com/u/11151445?v=4" width="100px;" alt="Geoffrey"/><br /><sub><b>Geoffrey</b></sub>](https://github.com/g3offrey)<br />[💻](https://github.com/felixjb/Testify/commits?author=g3offrey "Code") [🤔](#ideas-g3offrey "Ideas, Planning, & Feedback") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Authors

-   **Felix J. Batista** - _Initial work_ - Github: [@felixjb](https://github.com/felixjb)

_based on extension by_ **Geoffrey** - Github: [@g3offrey](https://github.com/g3offrey)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/felixjb/testify/blob/master/LICENSE) file for details.
