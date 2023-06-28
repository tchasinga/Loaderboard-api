// generateScores.js
const generateScores = (scores) => {
  const scoreList = document.querySelector('.getSavedData');
  scoreList.innerHTML = '';

  if (scores && Array.isArray(scores)) {
    scores.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${score.user}: ${score.score}`;
      scoreList.appendChild(listItem);
    });
  } else {
    scoreList.innerHTML = 'No scores available.';
  }
};

export default generateScores;
