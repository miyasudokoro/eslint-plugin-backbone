const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert");

const loc = path.join(__dirname, "lib", "rules");
const rules = fs.readdirSync(loc);
for (const rule of rules ) {
    if (rule !== "index.js") {
        test(rule, () => {
            require(path.join(loc,rule));
        });
    }
}

test("index",() => {
    const index = require("../index.js");
    assert(index.meta.name === "backbone");

    for (const rule of rules) {
        if (rule !== "index.js") {
            assert(!!index.rules[rule]);
            assert(!!index.configs.recommended[rule]);
        }
    }
});
