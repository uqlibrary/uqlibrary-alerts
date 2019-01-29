# uqlibrary-alerts

[![Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-alerts/status.svg)](https://david-dm.org/uqlibrary/uqlibrary-alerts)
[![Dev Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-alerts/dev-status.svg)](https://david-dm.org/uqlibrary/uqlibrary-alerts?type=dev)

uqlibrary-alerts is a simple list view showing alerts for all libraries at the University of Queensland.

Full documentation can be found at [GitHub Pages](http://uqlibrary.github.io/uqlibrary-alerts/uqlibrary-alerts/).

## Getting Started

Install Node.JS and run the following:

```sh
npm install -g bower web-component-tester polymer-cli
npm install
bower install
```

### Developing

- Please adhere to the Polymer code style guide provided at [Style Guide](http://polymerelements.github.io/style-guide/).
- Colors and common styles are imported (bower install) from [uqlibrary-styles](http://github.com/uqlibrary/uqlibrary-styles).
- A preview of the component can be viewed locally by running `npm start`. Use the second URL from the command output.
- GitHub pages should be updated after every commit to `master` branch by running `bin/generate-gh-pages.sh`

## Testing

Tests are run using Web Component Tester.

```sh
npm test
```
