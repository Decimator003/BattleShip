import { Gameboard } from "./Gameboard.js";
export class Player {
  constructor(type, gameboard, ships) {
    this.type = type;
    this.gameboard = gameboard;
    this.ships = ships;
  }
}