System.config({
  "baseURL": "./",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "fastdom": "github:wilsonpage/fastdom@0.8.6",
    "fetch": "github:github/fetch@0.8.1",
    "lodash": "npm:lodash@3.8.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "velesin/jasmine-jquery": "github:velesin/jasmine-jquery@2.1.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash@3.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

