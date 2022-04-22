## Debugit 2022 - Revenge of the Snake
![Website Preview](./assets/images/github_cover.bmp "Revenge of the Snake")

## Introduction
Who hasn't played the infamous Snake Game?! This is an attempt to replicate the same classic "Nokia" phone game, but with better customizations (as each player has his own asthetic choices) and a variety of never-seen-before boards that will challenge even the best of players.

## How to run the game?
You can either run the game online at [Revenge of the Snake](https://eshaanagg.github.io/Debugit_2022/index.html) or you can also clone this repository and then run `index.html` in your web browser. No need for any fancy installations!

## Tech Stack Used
  - HTML to provide the skeleton for the web-page.
  - CSS to provide the skin and visual appeal.
  - Javascript to provide the brain.
  - Bootstrap to make the interface prettier.

## Features

- The Game (Duhhh)
   - Use the `arrow keys` or `WASD keys` to jump right into the game.
- Customizations
   - Play the game in 4 modes - `Easy`, `Medium`, `Difficult` and `Impossible`.
   - Change the music playback settings.
   - Boundaries can be treated as being `connected` or `standalone` to play similar, yet drastically different versions of the same game.
   - Change the layout of the board that you are playing on. By default you get the `Classic` square grid and the `Imperfect Diamond` grid. 
   - Every colour of the game layout is customizable! Choose your own colours for cells, snake and food to create a version perfect for you!

## Creating Your Own Grid
   - Go to Game Layout option and choose the last card.
   - You can design your own grid by simply which cells you want in the grid to be active, and which to be inactive.
   - `Note` : The first and last row (and column) of the grid must always be inactive. Unlike you, our reptile friends do have some limits.
   - You can enter a Name, Description and URL to the cover image of the board you are making.
   - In case the URL is invalid, a default "Invalid Image" would be displayed.

## Scope and Improvements
   - Each board is currently stored as a JSON string in the `LocalStorage` of the users' browser so that they can access their boards over multiple sessions. Adding a simple database connectivity would allow these to be stored, and can be made available to other users too!
   - Designing an Arcade Mode in which different levels consist of different boards and aim to reach different scores.
  
## Video Demonstration
[Video](./VideoDemonstration.mp4)

`Note` : Due to some bug in the recording software, the color picker wasn't captured in the video around the 1:30 minute mark. 