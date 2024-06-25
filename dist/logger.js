"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const store_1 = require("./store");
function getLogger() {
    setInterval(() => {
        console.log(store_1.gameManager.log());
    }, 5000);
}
exports.getLogger = getLogger;
