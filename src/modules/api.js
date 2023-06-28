// api.js
const leaderboardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const submitScore = async (name, score, gameID) => {
  try {
    const response = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    console.log('Score submitted:', data);
  } catch (error) {
    console.error('Error submitting score:', error);
  }
};

const refreshScores = async (gameID) => {
  try {
    const response = await fetch(`${leaderboardApi}games/${gameID}/scores/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error retrieving scores:', error);
    return [];
  }
};

export { submitScore, refreshScores };
