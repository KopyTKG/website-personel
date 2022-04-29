const snakeboard = document.getElementById("snakeboard");
const snakeboard_ctx = snakeboard.getContext("2d");

document.addEventListener("keydown", change_direction);
// Snake and his body
let snake = [
  {x: 10, y: 10}
];
// Colors used in game
const colors = {
  board_border: 'rgb(0,0,0)', // Black
  board_background: 'rgb(255,255,255)', // White
  snake_col: 'rgb(255,0,255)', // Purple
  snake_border: 'rgb(0,0,0)', // DarkPurple
  food_background: 'rgb(30,255,30)', // LightGreen
  food_border: 'rgb(0,0,0)',// DarkGreen
  wall_background: 'rgb(255,30,30)', // LightGreen
  wall_border: 'rgb(0,0,0)'// DarkGreen
};

// Keys used for playing
const keys = {
  up: 38,
  right: 39,
  down: 40,
  left: 37,
  w: 87,
  d: 68,
  s: 83,
  a: 65
};
// Score
let adder = parseInt(document.getElementById("scoreAdder").value);
let score = 0;
// True if changing direction
let changing_direction = false;
/* --- Food ---*/
let food_x;
let food_y;
/* --- Movement --- */
// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;
let walls = gen_walls();
// Start game
gen_food();
// main function called repeatedly to keep the game running
function main() {
  // Debug from HTML
  let speed = document.getElementById("tickrate").value;
  adder = parseInt(document.getElementById("scoreAdder").value);

  // Endgame check
  if (has_game_ended()) {
    document.getElementById("Lose").style.visibility = "visible";
    return;
  } else {
    changing_direction = false;
    if(walls.length == score + 1) walls.push(gen_walls());
    else {
      if(walls.length < score + 1) walls.push(gen_walls());
    }
    setTimeout(function onTick() {
      clear_board();
      drawFood();
      move_snake();
      drawSnake();
      for (var i = 0; i < walls.length; i++) {
        drawWalls(walls[i][0], walls[i][1]);
      }
      // Repeat
      main();
    }, speed);
  }
}

// draw a border around the canvas
function clear_board() {
  snakeboard_ctx.fillStyle = colors.board_background;
  snakeboard_ctx.strokestyle = colors.board_border;
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

// draw a wall inside of the canvas
function drawWalls(wall_X, wall_Y) {
  snakeboard_ctx.fillStyle = colors.wall_background;
  snakeboard_ctx.strokestyle = colors.wall_border;
  snakeboard_ctx.fillRect(wall_X, wall_Y, 10, 10);
  snakeboard_ctx.strokeRect(wall_X, wall_Y, 10, 10);
}
// Draw the snake on the canvas
function drawSnake() {
  // Draw each part
  snake.forEach(drawSnakePart);
}

// draw a food inside of the canvas
function drawFood() {
  snakeboard_ctx.fillStyle = colors.food_background;
  snakeboard_ctx.strokestyle = colors.food_border;
  snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
  snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
}

// Generate a wall inside of the canvas
function gen_walls() {
  let wall_gen_x = random(10,snakeboard.width - 10);
  let wall_gen_y = random(10,snakeboard.width - 10);
  cords = [wall_gen_x,wall_gen_y];
  return cords;
}

// Draw one snake part
function drawSnakePart(snakePart) {
  snakeboard_ctx.fillStyle = colors.snake_col;
  snakeboard_ctx.strokestyle = colors.snake_border;
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}


function has_game_ended() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }
  for (var i = 0; i < walls.length; i++) {
    if (snake[0].x === walls[i][0] && snake[0].y === walls[i][1]) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeboard.width - 10;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeboard.height - 10;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}

function random(min, max) {
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function gen_food() {
  let inArray = false;
  let temp_food_x = random(10,snakeboard.width - 20);
  let temp_food_y = random(10,snakeboard.height - 20);
  for (var position = 0; position < walls.length; position++) {
    if(inArray) break;
    if(walls[position][0] == temp_food_x && walls[position][1] == temp_food_y) {
       inArray = true;
       break;
    } else {
      inArray = false;
    }
  }
  if(!inArray) {
    food_x = temp_food_x;
    food_y = temp_food_y;
    snake.forEach(function has_snake_eaten_food(part) {
      const has_eaten = part.x == food_x && part.y == food_y;
      if (has_eaten) gen_food();
    });
  } else {
    gen_food();
  }
}

function change_direction(event) {
// Prevent the snake from reversing
  if (changing_direction) return;
  changing_direction = true;
  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;
  if (keyPressed === keys.left && !goingRight || keyPressed === keys.a && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === keys.up && !goingDown || keyPressed === keys.w && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === keys.right && !goingLeft || keyPressed === keys.d && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === keys.down && !goingUp || keyPressed === keys.s && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function move_snake() {
  // Create the new Snake's head
  const head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy
  };
  // Add the new head to the beginning of snake body
  snake.unshift(head);
  const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
  if (has_eaten_food) {
    score += adder;
    document.getElementById('score').innerHTML = score;
    // Generate new food location
    gen_food();
  } else {
    snake.pop();
  }
}
