import { gameManager } from "./store";

export function getLogger() {
  setInterval(() => {
    console.log(gameManager.log());
  }, 5000);
}
