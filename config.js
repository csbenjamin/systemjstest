System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "defaultJSExtensions": true
});

System.config({
    "meta": {
        "module2/index":{
            "format":"global",
            "exports":"module2",
            "scriptLoad":true
        }
    }
});

System.config({
  "map": {
    "traceur": "github:jmcriffey/bower-traceur@0.0.89",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.89"
  }
});

