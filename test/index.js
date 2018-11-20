"use strict";

const CLIEngine = require("eslint").CLIEngine;
const cli = new CLIEngine({
        configFile : "./eslintrc.js",
        parserOptions : {
            ecmaFeatures : {
                modules : true
            },
            sourceType : "module"
        }
    });

const report = cli.executeOnFiles([ "./test/specimens/cjs.js", "./test/specimens/esm.js" ]);
const formatter = cli.getFormatter();
const results = process.argv[2] === "all" ? report.results : CLIEngine.getErrorResults(report.results);

console.log(formatter(results));

process.exit(report.errorCount);
