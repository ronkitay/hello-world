import { stdin as input, stdout as output } from 'process';
import * as readline from 'node:readline';
import {Interface} from "readline";

export class Game {

    currentTurn: number = 0;
    players = [ 'X', 'O'];

    board = [
        ['E', 'E', 'E'],
        ['E', 'E', 'E'],
        ['E', 'E', 'E']
    ]

    gameOver(): boolean {
        return this.allCellsMatch(this.board[0][0], this.board[0][1], this.board[0][2]) ||
            this.allCellsMatch(this.board[1][0], this.board[1][1], this.board[1][2]) ||
            this.allCellsMatch(this.board[2][0], this.board[2][1], this.board[2][2]) ||
            this.allCellsMatch(this.board[0][0], this.board[1][0], this.board[2][0]) ||
            this.allCellsMatch(this.board[0][1], this.board[1][1], this.board[2][1]) ||
            this.allCellsMatch(this.board[0][2], this.board[1][2], this.board[2][2]) ||
            this.allCellsMatch(this.board[0][0], this.board[1][1], this.board[2][2]) ||
            this.allCellsMatch(this.board[0][2], this.board[1][1], this.board[2][0]) ||
            this.currentTurn > 8;
    }

    allCellsMatch(cell1: string, cell2: string , cell3: string): boolean {
        return cell1 == cell2 && cell2 == cell3 && cell1 != 'E';
    }

    printBoard(board: string[][]): void {
        console.log("");
        console.log(`${board[0][0]}  ${board[0][1]}  ${board[0][2]}    ===>    1  2  3`)
        console.log(`${board[1][0]}  ${board[1][1]}  ${board[1][2]}    ===>    4  5  6`)
        console.log(`${board[2][0]}  ${board[2][1]}  ${board[2][2]}    ===>    7  8  9`)
        console.log("");
    }

    play(): void {
        let rl = readline.createInterface({input, output});

        this.runGame(rl);
    }

    private runGame(rl: Interface) {
        if (!this.gameOver()) {
            this.printBoard(this.board);
            rl.question('Whats your move? (1-9) ', (move) => {
                let moveNumeric = parseInt(move)-1;
                if (isNaN(moveNumeric) || moveNumeric < 0 || moveNumeric > 8) {
                    console.log('Invalid move - cell must be between 1 and 9!');
                    setImmediate( () => this.runGame(rl));
                }
                else {
                    let row = Math.floor(moveNumeric / 3);
                    let column = moveNumeric % 3;
                    if (this.board[row][column] != 'E') {
                        console.log('Invalid move - cell already occupied!');
                        setImmediate(() => this.runGame(rl));
                    } else {
                        this.board[row][column] = this.players[this.currentTurn % 2];
                        this.currentTurn++;
                        setImmediate(() => this.runGame(rl));
                    }
                }
            });
        }
        else {
            console.log("Game finished - final board is:");
            this.printBoard(this.board);
            process.exit(0);
        }
    }
}

