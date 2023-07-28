import './style.css';
import Forest from './forest.jpg';

const p = document.createElement('h1');
p.innerText = "Whereas";

const forest = document.createElement('img');
forest.src = Forest;

document.body.appendChild(p);
document.body.appendChild(forest);