module.exports = {
    "env": {
        "browser": true,
        "node": true
    },

    "globals": {
        "JS": true,
        "JSSRV": true
    },

    "parserOptions": {
        "ecmaVersion": 2015
    },

    "rules": {
        ////////// Possible Errors //////////

        // disallow trailing commas in object literals
        "comma-dangle": "error",
        // disallow assignment in conditional expressions
        "no-cond-assign": "error",
        // disallow use of console (off by default in the node environment)
        "no-console": "warn",
        // disallow use of constant expressions in conditions
        "no-constant-condition": "error",
        // disallow control characters in regular expressions
        "no-control-regex": "off",
        // disallow use of debugger
        "no-debugger": "warn",
        // disallow duplicated argument names
        "no-dupe-args": "error",
        // disallow duplicate keys when creating object literals
        "no-dupe-keys": "error",
        // disallow duplicated case labels in a switch statement
        "no-duplicate-case": "error",
        // disallow empty statements
        "no-empty": "warn",
        // disallow the use of empty character classes in regular expressions
        "no-empty-character-class": "warn",
        // disallow assigning to the exception in a catch block
        "no-ex-assign": "error",
        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": "warn",
        // disallow unnecessary parentheses
        "no-extra-parens": "off",
        // disallow unnecessary semicolons
        "no-extra-semi": "error",
        // disallow overwriting functions written as function declarations
        "no-func-assign": "warn",
        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": "off",
        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": "error",
        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": "warn",
        // disallow negation of the left operand of an in expression
        "no-negated-in-lhs": "warn",
        // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-obj-calls": "off",
        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": "warn",
        // disallow reserved words being used as object literal keys
        "no-reserved-keys": "off",
        // disallow sparse arrays
        "no-sparse-arrays": "warn",
        // disallow bugs caused by depending on ASI
        "no-unexpected-multiline": "error",
        // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unreachable": "error",
        // disallow comparisons with the value NaN
        "use-isnan": "error",
        // Ensure JSDoc comments are valid
        "valid-jsdoc": "off",
        // Ensure that the results of typeof are compared against a valid string
        "valid-typeof": "error",


        ////////// Best Practices //////////

        // Enforces getter/setter pairs in objects
        "accessor-pairs": "off",
        // treat var statements as if they were block scoped
        "block-scoped-var": "warn",
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": ["error", 10],
        // require return statements to either always or never specify values
        "consistent-return": "error",
        // specify curly brace conventions for all control statements
        "curly": "error",
        // require default case in switch statements
        "default-case": "warn",
        "dot-location": ["error", "property"],// enforces consistent newlines before or after dots
        // encourages use of dot notation whenever possible
        "dot-notation": "error",
        // require the use of === and !==
        "eqeqeq": "error",
        // make sure for-in loops have an if statement
        "guard-for-in": "off",
        // disallow the use of alert, confirm, and prompt
        "no-alert": "warn",
        // disallow use of arguments.caller or arguments.callee
        "no-caller": "error",
        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": "warn",
        // disallow else after a return in an if
        "no-else-return": "error",
        // disallow use of empty destructuring patterns
        "no-empty-pattern": "error",
        // disallow comparisons to null without a type-checking operator
        "no-eq-null": "off",
        // disallow use of eval()
        "no-eval": "error",
        // disallow adding to native types
        "no-extend-native": "error",
        // disallow unnecessary function binding
        "no-extra-bind": "error",
        // disallow fallthrough of case statements
        "no-fallthrough": "warn",
        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": "error",
        // disallow the type conversions with shorter notations
        "no-implicit-coercion": "error",
        // disallow use of eval()-like methods
        "no-implied-eval": "error",
        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": "off",
        // disallow usage of __iterator__ property
        "no-iterator": "error",
        // disallow use of labeled statements
        "no-labels": "error",
        // disallow unnecessary nested blocks
        "no-lone-blocks": "error",
        // disallow creation of functions within loops
        "no-loop-func": "warn",
        // disallow the use of magic numbers
        "no-magic-numbers": "off",
        // disallow use of multiple spaces
        "no-multi-spaces": ["warn", {
            "exceptions" : {
                "AssignmentExpression" : true,
                "Property" : true,
                "VariableDeclarator" : true,
                "LogicalExpression" : true
            }
        }],
        // disallow use of multiline strings
        "no-multi-str": "error",
        // disallow reassignments of native objects
        "no-native-reassign": "error",
        // disallow use of new operator when not part of the assignment or comparison
        "no-new": "off",
        // disallow use of new operator for Function object
        "no-new-func": "off",
        // disallows creating new instances of String, Number, and Boolean
        "no-new-wrappers": "error",
        // disallow use of octal literals
        "no-octal": "error",
        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-octal-escape": "error",
        // disallow reassignment of function parameters
        "no-param-reassign": "off",
        // disallow use of process.env
        "no-process-env": "off",
        // disallow usage of __proto__ property
        "no-proto": "error",
        // disallow declaring the same variable more then once
        "no-redeclare": "error",
        // disallow use of assignment in return statement
        "no-return-assign": "error",
        // disallow use of javascript: urls.
        "no-script-url": "error",
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": "error",
        // disallow use of comma operator
        "no-sequences": "error",
        // restrict what can be thrown as an exception
        "no-throw-literal": "error",
        // disallow usage of expressions in statement position
        "no-unused-expressions": "error",
        // disallow unnecessary .call() and .apply()
        "no-useless-call": "error",
        // disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": "error",
        // disallow use of void operator
        "no-void": "error",
        // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME
        "no-warning-comments": "off",
        // disallow use of the with statement
        "no-with": "error",
        // require use of the second argument for parseInt()
        "radix": "error",
        // requires to declare all vars on top of their containing scope
        "vars-on-top": "error",
        // require immediate function invocation to be wrapped in parentheses
        "wrap-iife": "error",
        // require or disallow Yoda conditions
        "yoda": "error",


        ////////// Strict Mode //////////

        // controls location of Use Strict Directives
        "strict": "off",


        ////////// Legacy //////////
        
        // disallow the usage of bitwise operators (|, &, <<, >>) as they're often an error
        "no-bitwise": "error",


        ////////// Variables //////////

        // enforce or disallow variable initializations at definition
        "init-declarations": "off",
        // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-catch-shadow": "error",
        // disallow deletion of variables
        "no-delete-var": "error",
        // disallow labels that share a name with a variable
        "no-label-var": "error",
        // disallow declaration of variables already declared in the outer scope
        "no-shadow": "error",
        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": "error",
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef": "error",
        // disallow use of undefined when initializing variables
        "no-undef-init": "error",
        // disallow use of undefined variable
        "no-undefined": "off",
        // disallow declaration of variables that are not used in the code
        "no-unused-vars": "warn",
        // disallow use of variables before they are defined
        "no-use-before-define": "error",


        ////////// Node.js //////////

        // enforce return after a callback
        "callback-return": ["error", [
            "callback",
            "cb",
            "next",
            "done"
        ]],
        // enforce require() on top-level module scope
        "global-require": "off",
        // enforces error handling in callbacks (on by default in the node environment)
        "handle-callback-err": "off",
        // disallow mixing regular variable and require declarations (on by default in the node environment)
        "no-mixed-requires": "off",
        // disallow use of new operator with the require function (on by default in the node environment)
        "no-new-require": "off",
        // disallow string concatenation with __dirname and __filename (on by default in the node environment)
        "no-path-concat": "off",
        // disallow process.exit() (on by default in the node environment)
        "no-process-exit": "off",
        // restrict usage of specified node modules
        "no-restricted-modules": "off",
        // disallow use of synchronous methods
        "no-sync": "off",


        ////////// Stylistic Issues //////////

        // enforce spacing inside array brackets (fixable)
        "array-bracket-spacing": ["error", "always"],
        // disallow or enforce spaces inside of single line blocks (fixable)"
        "block-spacing": ["error", "always"],
        // enforce one true brace style
        "brace-style": "error",
        // Require camel case names (except in properties)
        "camelcase": ["error", {
            "properties": "never"
        }],
        // enforce spacing before and after comma
        "comma-spacing": "error",
        // enforce one true comma style
        "comma-style": ["error", "last"],
        // require or disallow padding inside computed properties (fixable)
        "computed-property-spacing": "off",
        // enforces consistent naming when capturing the current execution context
        "consistent-this": ["error", "self", "ctrl"],
        // enforce newline at the end of file, with no multiple empty lines
        "eol-last": "warn",
        // require function expressions to have a name
        "func-names": "off",
        // enforces use of function declarations or expressions
        "func-style": ["warn", "declaration"],
        // specify tab or space width for your code (fixable)
        "indent": ["warn", 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1,
            "outerIIFEBody": 1,
            "FunctionDeclaration":{
                "body": 1,
                "parameters": "first"
            },
            "CallExpression": {
                "arguments": "first"
            },
            "ArrayExpression": 1,
            "ObjectExpression": 1
        }],
        // specify whether double or single quotes should be used in JSX attributes
        "jsx-quotes": "off",
        // enforces spacing between keys and values in object literal properties
        "key-spacing": ["error", {
            "beforeColon": true,
            "afterColon": true,
            "align": "colon"
        }],
        // disallow mixed 'LF' and 'CRLF' as linebreaks
        "linebreak-style": "off",
        // enforce empty lines around comments
        "lines-around-comment": ["off", {
            "beforeBlockComment" : true,
            "beforeLineComment" : true,
            "allowBlockStart" : true,
            "allowObjectStart" : true,
            "allowArrayStart" : true
        }],
        // specify the maximum depth callbacks can be nested
        "max-nested-callbacks": "off",
        // require a capital letter for constructors
        "new-cap": "error",
        // disallow the omission of parentheses when invoking a constructor with no arguments
        "new-parens": "error",
        // require or disallow an empty newline after variable declarations
        "newline-after-var": "error",
        // disallow use of the Array constructor
        "no-array-constructor": "error",
        // disallow use of the continue statement
        "no-continue": "off",
        // disallow comments inline after code
        "no-inline-comments": "off",
        // disallow if as the only statement in an else block
        "no-lonely-if": "error",
        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",
        // disallow multiple empty lines
        "no-multiple-empty-lines": "warn",
        // disallow negated conditions
        "no-negated-condition": "off",
        // disallow nested ternary expressions
        "no-nested-ternary": "error",
        // disallow use of the Object constructor
        "no-new-object": "error",
        // disallow use of certain syntax in code
        "no-restricted-syntax": "off",
        // disallow space between function identifier and application
        "no-spaced-func": "error",
        // disallow the use of ternary operators
        "no-ternary": "off",
        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "off",
        // disallow dangling underscores in identifiers
        "no-underscore-dangle": "off",
        // disallow the use of ternary operators when a simpler alternative exists
        "no-unneeded-ternary": "error",
        // require or disallow spaces inside object brackets
        "object-curly-spacing": ["error", "always"],
        // allow just one var statement per function
        "one-var": "off",
        // require assignment operator shorthand where possible or prohibit it entirely
        "operator-assignment": "off",
        // enforce operators to be placed before or after line breaks
        "operator-linebreak": ["error", "after"],
        // enforce padding within blocks
        "padded-blocks": ["warn", "never"],
        // require quotes around object literal property names
        "quote-props": ["error", "as-needed"],
        // specify whether double or single quotes should be used
        "quotes": ["error", "double", "avoid-escape"],
        // Require JSDoc comment
        "require-jsdoc": "off",
        // disallow space before/after semicolon
        "semi-spacing": ["warn", {
            "before" : false,
            "after" : true
        }],
        // require or disallow use of semicolons instead of ASI
        "semi": "error",
        // sort variables within the same declaration block
        "sort-vars": "off",
        // require a space after certain keywords
        "space-after-keywords": "off",
        // require or disallow space before blocks
        "space-before-blocks": ["error", "always"],
        // require a space after function names
        "space-before-function-paren": ["error", "never"],
        // require spacing before most keywords (fixable)
        "keyword-spacing": ["error", {
            "before" : true,
            "after" : false,
            "overrides" : {
                "return" : {
                    "after" : true
                },
                "else" : {
                    "after" : true
                },
                "try" : {
                    "after" : true
                },
                "from" : {
                    "after" : true
                },
                "import" : {
                    "after" : true
                }
            }
        }],
        // require or disallow spaces inside parentheses
        "space-in-parens": "off",
        // require spaces around operators
        "space-infix-ops": "error",
        // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        "space-unary-ops": "off",
        // require or disallow a space immediately following the // in a line comment
        "spaced-comment": ["warn", "always"],
        // require regex literals to be wrapped in parentheses
        "wrap-regex": 0
    }
};
