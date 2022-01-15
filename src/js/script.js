let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue

const greenArea = document.querySelector('.green-area');
const redArea = document.querySelector('.red-area');
const yellowArea = document.querySelector('.yellow-area');
const blueArea = document.querySelector('.blue-area');

const createColorElement = (color) => {
  switch (color) {
    case 1:
      return redArea;
    case 2:
      return yellowArea;
    case 3:
      return blueArea;
    default:
      return greenArea;
  }
};

const lightColor = (element, time) => {
  const timeRound = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, timeRound);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

const shuffleOrder = () => {
  const colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  order.forEach((i) => {
    const elementColor = createColorElement(i);
    lightColor(elementColor, Number(i) + 1);
  });
};

const nextLevel = () => {
  score += score;
  shuffleOrder();
};

const playGame = () => {
  alert('Welcome! Starting a new game!');
  score = 0;

  nextLevel();
};

const gameOver = () => {
  alert(`Score ${score}\nYou lose! Game Over!\nClick 'OK' to restart`);
  order = [];
  clickedOrder = [];

  playGame();
};

const checkOrder = () => {
  clickedOrder.forEach((i, index) => {
    if (i !== order[index]) {
      gameOver();
    }
  });

  if (clickedOrder.length === order.length) {
    alert(`Score: ${score}\nYou're right! Starting next level...`);
    nextLevel();
  }
};

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

// game over

/* greenArea.addEventListener('click', click(0));
redArea.addEventListener('click', click(1));
yellowArea.addEventListener('click', click(2));
blueArea.addEventListener('click', click(3)); */

greenArea.onclick = () => click(0);
redArea.onclick = () => click(1);
yellowArea.onclick = () => click(2);
blueArea.onclick = () => click(3);

playGame();
