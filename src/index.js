// index.js
import { refreshScores, submitScore } from './modules/api.js';
import generateScores from './modules/generateScores.js';
import './style/styles.css';

const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'tchasiZl4d7IVkemOTTVg2fUdz';

const createGame = async () => {
  const response = await fetch(`${leaderboardApi}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Tchasinga jack Game',
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });

  const { id } = await response.json();
  return id;
};

const showScores = async () => {
  try {
    const scores = await refreshScores(gameID);
    generateScores(scores);
  } catch (error) {
    console.error('Error retrieving scores:', error);
  }
};

createGame();
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('nameInput');
  const scoreInput = document.getElementById('scoreInput');
  const errorContainer = document.getElementById('errorContainer');

  if (nameInput.value !== '' && scoreInput.value !== '') {
    submitScore(nameInput.value, scoreInput.value, gameID);
    nameInput.value = '';
    scoreInput.value = '';
    showScores();
    errorContainer.style.display = 'none';
  } else if (nameInput.value === '' && scoreInput.value === '') {
    errorContainer.textContent = 'Name and score fields are required.';
    errorContainer.style.display = 'block';
  } else if (nameInput.value === '') {
    errorContainer.textContent = 'Please enter your name.';
    errorContainer.style.display = 'block';
  } else if (scoreInput.value === '') {
    errorContainer.textContent = 'Please enter your score.';
    errorContainer.style.display = 'block';
  }
});

const refreshLink = document.querySelector('.refreshBtn');
refreshLink.addEventListener('click', (e) => {
  e.preventDefault();
  showScores();
});

function confirmExit() {
  return false;
}

window.onbeforeunload = confirmExit;
window.onload = () => {
  showScores();
  confirmExit();
};

const el = document.querySelector('.svg');
const elWrapperClone = el.innerHTML;
document.getElementById('button').addEventListener('click', () => {
  el.innerHTML = elWrapperClone;
});
