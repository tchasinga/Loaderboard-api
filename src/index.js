import './style/styles.css';
import dataGet from './modules/dataCollect.js';

const getSavedData = document.querySelector('.getSavedData');
getSavedData.innerHTML += dataGet.map((displayer) => {
  const data = `
     <li>${displayer.name} : ${displayer.score}</li>
    `;

  return data;
}).join('');
const el = document.querySelector('.svg');
const elWrapperClone = el.innerHTML;
document.getElementById('button').addEventListener('click', () => {
  el.innerHTML = elWrapperClone;
});