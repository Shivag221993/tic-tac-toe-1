# Tic Tac Toe

A React application built with Vite and TypeScript that implements the classic Tic Tac Toe game using a strict Test-Driven Development (TDD) approach.

Players take turns placing X and O on a 3x3 board until one player draws three in a row or the board is full. The UI is simple, responsive, and driven by shared constants and component-based styling.

---

## Game Rules

- X always goes first.
- Players cannot play on a square that has already been played.
- Players alternate placing X’s and O’s on the board.
- The game ends when one player has three in a row horizontally, vertically, or diagonally.
- If a player achieves three matching symbols in a row, that player wins.
- If all nine squares are filled without a winning line, the game is a draw.

---

## Tech Stack & Tooling Versions

| Tool / Library            | Version   | Category    | Description                                |
| :------------------------ | :-------- | :---------- | :----------------------------------------- |
| **Node.js**               | `v22.12.0`| Environment | JavaScript runtime environment             |
| **npm**                   | `10.9.0`  | Management  | Node Package Manager for dependencies      |
| **React**                 | `^19.2.6` | Runtime     | Core UI library                            |
| **React DOM**             | `^19.2.6` | Runtime     | Render engine for the browser DOM          |
| **TypeScript**            | `~6.0.2`  | Development | Static type checking                       |
| **Vite**                  | `^8.0.12` | Development | Next-generation frontend tooling & bundler |
| **Vitest**                | `^4.1.8`  | Testing     | Fast, native test runner                   |
| **React Testing Library** | `^16.3.2` | Testing     | UI component testing utilities             |
| **Jest DOM**              | `^6.9.1`  | Testing     | Custom DOM matchers                        |
| **JSDOM**                 | `^28.1.0` | Testing     | Browser environment simulation for node    |
| **ESLint**                | `^10.3.0` | Linting     | Code quality and static analysis tool      |

---

## Features

- Clean React + TypeScript implementation
- Board state managed with reusable hooks and constants
- Component-based layout for game board, squares, status, and reset control
- Strict TDD workflow with unit tests covering game logic and UI behavior

---

## How to Run the Application

1) Install Visual Studio Code, Node (`v22.12.0`), and Git.
2) Clone the repository and open it in Visual Studio Code.
3) Open a terminal in the project folder.
4) Run:
   a) `npm install`
   b) `npm run dev`
5) Copy the local URL shown in the terminal and paste it into your browser.

---

## Testing

- Run unit tests and coverage report:
  - `npm run test`
- Run mutation tests:
  - `npm run mutate`

The test command generates coverage information, and the mutation command creates a report in the configured report folder.
