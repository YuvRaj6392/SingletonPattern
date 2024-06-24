import { Games } from "./store";

export function startLogger() {
  setInterval(() => {
    console.log(Games);
  }, 5000);
}
