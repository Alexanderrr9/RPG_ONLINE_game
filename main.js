const player1 = {
  name: 'Scorpion',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Автомат', 'Пистолет', 'Нож'],
  attack: function() {
    console.log(this.name + ' Fight...');
  },
};

const player2 = {
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Автомат', 'Пистолет', 'Нож'],
  attack: function() {
    console.log(this.name + ' Fight...');
  },
};
player1.attack();
player2.attack();


function createPlayer(player1, hpPlayer) {
  let createDiv1 = document.createElement('div');
  createDiv1.className = player1;

  let createDiv2 = document.createElement('div');
  createDiv2.className = 'progressbar';

  let createDiv3 = document.createElement('div');
  createDiv3.className = 'life';
  createDiv3.style.width = hpPlayer.hp;

  let createDiv4 = document.createElement('div');
  createDiv4.className = 'name';
  createDiv4.innerText = hpPlayer.name;

  let createDiv5 = document.createElement('div');
  createDiv5.className = 'character';

  let createImg = document.createElement('img');
  createImg.src = hpPlayer.img;

  createDiv1.appendChild(createDiv5);
  createDiv2.appendChild(createDiv4);
  createDiv2.appendChild(createDiv3);
  createDiv1.appendChild(createDiv2);
  createDiv5.appendChild(createImg);

  const arenas = document.querySelector('.arenas');
  arenas.appendChild(createDiv1);
};

createPlayer('player1', player1);
createPlayer('player2', player2);