## Debugit 2022 - Revenge of the Snake

## Introduction
How hasn't played the infamous Snake Game?! This is an attempt to replicate the same classic "Nokia" phone Snake game, but with better customizations (as each player has his own asthetic choices) and a variety of never-seen-before boards that will challenge even the best of players.

## How to run the game?
You can either run the game online at [Revenege of the Snake](https://eshaanagg.github.io/Debugit_2022/index.html) or you can also clone this repository and then run index.html in your web browser. No need for any fancy installations!

## Tech Stack Used
  - HTML to provide the skeleton for the web-page.
  - CSS to provide the skin and visual appeal.
  - Javascript to provide the brain.
  - Bootstrap to make the iterface prettier.

## Features

- The Game (Duhhh)
   Use the Arrow keys or WASD keys to jump right into the game.
- Customizations
   - Play the game in 4 modes - Easy, Medium, Difficult and Impossible.
   - Change the music playback settings.
   - Boundaries can be treated as being `connected` or `standalone` to play similar, yet drastically different version of the same game.
   - Change the layout of the board that you are playing on. By default you get the `Classic` square grid and the `Imperfect Diamond` grid. 
- Create Your Own Grid
   - Go to Game Layout option and choose the last card to be redirected to 

  1. Check which branch are you on using the `git branch` command.
     ```
     git branch
     ```
  2. The branch name with a `*` on it is the current branch. If it is different from the branch that you created, then switch to your branch using the `git checkout`
     ```
     git checkout <branch_name>
     ```
  3. You can check the status of the files using 
     ```
     git status
     ```
  4. Add (Stage) all the files you want to upload using the `git add` command.
    To add individual files run the following command:
     ```
     git add <filename>
     ```
     If you want to add all the files from your project directory you can run
     ```
     git add .
     ```
     It is recommended not to add the some directories like node_modules directory in your commit. You can prevent it by adding it in a `.gitignore` file (For more reference [here](https://www.w3schools.com/git/git_ignore.asp?remote=github)).

     Demo:
     ![](./lib/add_files.png)

  5. Commmit your code.
     You can commit all your staged code (to the local git repository) using the `git commit` command
    Run the following command:
     ```
     git commit -m "first commit"
     ```
     You can replace `first commit` with anything. It is actually a message to let you keep a brief track of what changes has been done in that commit.

     Demo:
     ![](./lib/commit.png)

  6. Push your code.
     Push all of your commited code using the `git push` command.
    Run the following command:
     ```
     git push --set-upstream origin <branch_name>
     ```

     Demo:
     ![](./lib/push.png)

- Make the Pull Request and submit your code.
  1. After you push your code, it gets uploaded to your forked directory and creates a new branch that you created.
  2. If it notices any difference in the code of your forked repo and the parent repo. It automatically shows you an option to create a pull request.

    Demo:
    ![](./lib/pull_request.png)

  3. Write down a brief description of your project in the Pull Request description and give the PR a proper title and click on create pull request. Now GitHub might run some checks. If you pass all the checks, you are good to go.

    Demo:
    ![](./lib/submission.png) 


- Pat yourself on the back

  ![](./lib/pat.gif)

> All The Best 🎉🎉.