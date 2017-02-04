"use strict";

(function() {
    var fn = () => {},
        tagged   = fn`bar`,
        // template literal
        template = `foo ${tagged}`,
        boolean = Boolean(template),
        
        obj = {
            noquote : true,
            "yes-quote" : true
        };

}());
