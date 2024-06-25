"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (!GameManager.instance) {
            return (GameManager.instance = new GameManager());
        }
        return GameManager.instance;
    }
    addMove(gameId, move) {
        const game = this.games.find((game) => game.id === gameId);
        if (game) {
            game.move.push(move);
        }
    }
    addGame(Game) {
        this.games.push(Game);
    }
    log() {
        console.log(this.games);
    }
}
exports.gameManager = GameManager.getInstance();
