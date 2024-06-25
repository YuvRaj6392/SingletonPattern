interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  move: string[];
}

class GameManager {
  private games: Game[] = [];

  private static instance: GameManager;

  private constructor() {}

  public static getInstance() {
    if (!GameManager.instance) {
      return (GameManager.instance = new GameManager());
    }
    return GameManager.instance;
  }

  addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      game.move.push(move);
    }
  }

  addGame(Game: Game) {
    this.games.push(Game);
  }

  log() {
    console.log(this.games);
  }
}

export const gameManager = GameManager.getInstance();
