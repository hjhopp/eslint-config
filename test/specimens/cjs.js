"use strict";

const thing = "test";
const thing2 = "test";
const { thing3 } = { thing3 : "test" };

let a,
    b,
    arr = [];

(function() {
    var tagged,
        // template literal
        template = `foo ${tagged}`,
        boolean = Boolean(template),

        obj = {
            noquote     : true,
            "yes-quote" : true
        };

    function fn() {
        return boolean;
    }

    tagged = fn`bar`;

    if(a) {
        return arr.map((el) => el.prop);
    } else if(thing3) {
        return arr.map(el => el.prop);
    }

    if(thing && thing2) {
        return thing3;
    }

    if(obj.test) {
        return obj;
    }

    return [ a, b ];
}());
