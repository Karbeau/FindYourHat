// Challenge Project: Find Your Hat
// Overview
// This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

// Project Goals
// In this project, you’ll be building an interactive terminal game. The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor (field = [[]]) {
    this._field = field
    this.yLocation = 0
    this.xLocation = 0
    this.field[0][0] = pathCharacter
  }

  get field(){
    return this._field
  }

  runGame() {
    let playing = true

    if(this.field.length > 20 || this.field[0].length > 20){
      console.log('Okay? Your numbers suck pick better ones k');
      playing = false
    }
  
    while (playing) {
      this.print();
      this.promptQuestion();

      // if not in bounds, tell the player they lost and end the game
      if(!this.inBounds()) {
          console.log('Out of bounds! GAME OVER!!!');
          playing = false;
          break;
      // if the location the player is trying to go to is a hole, tell the player
      // they fell in a hole and end the game.
      } else if (this.itsAHole()) {
          console.log('Whoops, you fell in a hole! GAME OVER!!!');
          playing = false;
          break;
      // if the location the player is trying to go to is their hat, tell the player
      // they found their hat/won and end the game. 
      } else if (this.itsAHat()) {
          console.log('Congratulations, you\'ve found your hat!');
          playing = false;
          break;
      }
      // If the player hasn't died or found their hat update the current location on the map
      this.field[this.yLocation][this.xLocation] = pathCharacter;
    }
  }

  print() {
    for(let i = 0;i < this.field.length;i++){
      console.log(this.field[i].join(''));
    }
  }

  static generateField (height, width, percent) {
    // new Array(arrayLength)
    // Creates an array the length of height
    // with width ammount of nested arrays'
    // populated by ░
    let field = new Array(height)
    for(let i = 0; i < height; i++){
      field[i] = new Array(width).fill(fieldCharacter)
    }

    // Figure out how many holes needed by percentage passed in
    let percentageOfHoles = percent / 100
    let numberOfHoles = (height * width) * percentageOfHoles

    let randY = Math.floor(Math.random() * height);
    let randX = Math.floor(Math.random() * width);
    
    let hatY = randY
    let hatX = randX

    // Check if hat is at starting point [0][0]
    if (hatY === 0 && hatX === 0){
      hatY = Math.floor(Math.random() * height);
      hatX = Math.floor(Math.random() * height);
    }
    field[hatY][hatX] = hat;

    // New rand index for holes!
    for(let i = 0; i < numberOfHoles; i++){
      let holeY = Math.floor(Math.random() * height)
      let holeX = Math.floor(Math.random() * height)
      while(field[holeY][holeX] !== fieldCharacter){
        holeY = Math.floor(Math.random() * height)
        holeX = Math.floor(Math.random() * height)
      }
      field[holeY][holeX] = hole
    }
    return field
  }

  promptQuestion () {
    console.log('Your position is marked with a *')
    console.log('Enter A, S, D, or W')
    let answer = prompt('Which way do you want to move?').toUpperCase()
    if (answer === 'W') {
      this.yLocation -= 1
    } else if (answer === 'S') {
      this.yLocation += 1
    } else if (answer === 'A') {
      this.xLocation -= 1
    } else if (answer === 'D') {
      this.xLocation += 1
    }
  }

  inBounds() {
    if(this.yLocation >= 0 && this.xLocation >= 0 &&
    this.yLocation < this.field.length && this.xLocation < this.field[0].length){
      return true
    }
    return false
  }

  itsAHat() {
    if(this.field[this.yLocation][this.xLocation] === hat){
      return true
    }
  }

  itsAHole() {
    if(this.field[this.yLocation][this.xLocation] === hole){
      return true
    }
  }

}

let myField = new Field(Field.generateField(4, 7, 20));
myField.runGame()

