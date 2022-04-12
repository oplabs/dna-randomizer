"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignTokenIds = void 0;
const random_js_1 = require("random-js");
const assignTokenIds = (dnaHashes, seed) => {
    const { length } = dnaHashes;
    const random = new random_js_1.Random(random_js_1.MersenneTwister19937.seedWithArray(new TextEncoder().encode(seed))); // `random-js`
    const tokens = Array.from({ length }).map((_, index) => `${index + 1}`);
    const getRandomToken = () => {
        const index = random.integer(0, tokens.length - 1);
        return tokens.splice(index, 1)[0];
    };
    const dnaTokenMap = {};
    const sortedDnaHashes = [...dnaHashes].sort();
    for (const dna of sortedDnaHashes) {
        dnaTokenMap[dna] = getRandomToken();
    }
    return dnaTokenMap;
};
exports.assignTokenIds = assignTokenIds;
