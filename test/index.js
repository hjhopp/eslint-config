"use strict";

var CLI = require("eslint").CLIEngine,
    
    cli = new CLI({
        configFile : "./eslintrc.js"
    }),
    
    report = cli.executeOnFiles([ "./test/specimen.js" ]),
    format = cli.getFormatter();

console.log(format(CLI.getErrorResults(report.results)));

process.exit(report.errorCount);
