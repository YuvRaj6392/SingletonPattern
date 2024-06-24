import { Games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
  Games.push({
    id: Math.random().toString(),
    whitePlayerName: "Alice",
    blackPlayerName: "Denzel",
    moves: [],
  });
}, 5000);
