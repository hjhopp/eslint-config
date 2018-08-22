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

console.log(formatter(report.results));

// console.log(formatter(CLIEngine.getErrorResults(report.results)));

process.exit(report.errorCount);
