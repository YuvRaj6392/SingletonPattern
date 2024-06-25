import { gameManager } from "./store";
import { getLogger } from "./logger";

getLogger();

setInterval(() => {
  gameManager.addGame({
    id: Math.random().toString(),
    whitePlayerName: "Alex",
    blackPlayerName: "Daniel",
    move: ["e4", "d5"],
  });
}, 2500);
