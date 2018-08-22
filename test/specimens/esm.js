import m      from "mithril";
import sample from "lodash/sampple";

function test(a) {
    if(a) {
        return 5;
    }
}

export default {
    thing : test(m(sample))
};
