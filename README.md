# Codecademy Find Your Hat Terminal Game

> ## Overview
>The Field constructor should take a two-dimensional array representing the “field” itself.
>A field consists of a grid containing “holes” (O) and one “hat” (^). We use a neutral background character (░) to indicate the rest of the field itself.
The player will begin in the upper-left of the field, and the player’s path is represented by *
>Your game should be playable by users. In order to facilitate this, build out the following behavior:

>When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
>After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with *. They should be prompted for their next move.
>This should continue until the user either:

> - Wins by finding their hat.
>
> - Loses by landing on (and falling in) a hole.
>
> - Attempts to move “outside” the field.
>
> - When any of the above occur, let the user know and end the game.
>

Using JavaScript classes I built a terminal game that is sure to beat out Tetris in sales!
I had a lot of help from the Codecademy forums, and spent more time reading other people's code, to eventually understand it, before writing my own.

### How To Play
1. Create a field with a `height`, `width`, and `percentage` of holes on the board.

`let myField = new Field(Field.generateField(10, 7, 20))`

`myField.runGame()`

<sup>..Just don't input a height or width greater than 20 okay? Those aren't cool.</sup>

2. Then run the game in the terminal 

![Screenshot 2024-01-30 at 11 35 35 AM](https://github.com/Karbeau/FindYourHat/assets/40875530/0bfe20f5-f0fc-45b3-b675-2b653e73ffb4)

3. #### Now, find your hat! 
