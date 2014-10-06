# grunt-dtsm [![Circle CI](https://circleci.com/gh/vvakame/grunt-dtsm.png?style=badge)](https://circleci.com/gh/vvakame/grunt-dtsm)

> Grunt plugin for DTSM

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dtsm --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dtsm');
```

## The "dtsm" task

### Overview
In your project's Gruntfile, add a section named `dtsm` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dtsm: {
    main: {
      options: {
        config: "dtsm.json"
      }
    }
  }
});
```

### Options

#### options.config
Type: `String`
Default value: `dtsm.json`

A string value that is used to config file.
