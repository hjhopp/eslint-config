"use strict";

var fs = require("fs"),

    CLI = require("eslint").CLIEngine,
    
    cli = new CLI({
        configFile : "./eslintrc.js"
    }),
    
    report = cli.executeOnFiles([ "./test/specimen.js" ]);

process.exit(report.errorCode);
