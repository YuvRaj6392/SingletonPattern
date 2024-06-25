"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.getLogger)();
setInterval(() => {
    store_1.gameManager.addGame({
        id: Math.random().toString(),
        whitePlayerName: "Alex",
        blackPlayerName: "Daniel",
        move: ["e4", "d5"],
    });
}, 2500);
