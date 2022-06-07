// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p');
redText.classList.add('red-text');
redText.textContent = 'Hey I\'m red!';
redText.style.color = 'red';
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.classList.add('blue-text');
blueText.textContent = "I\'m a blue h3!";
blueText.style.color = 'blue';
container.appendChild(blueText);

const blackText = document.createElement('div');
blackText.style.cssText = 'border: black; background: pink;';

const h1 = document.createElement('h1');
h1.classList.add('child-h1');
h1.textContent = "I\'m in a div";
const para = document.createElement('p');
para.classList.add('para');
para.textContent = "ME TOO!";
// append two children to blackText div
blackText.appendChild(h1);
blackText.appendChild(para);
// append
container.appendChild(blackText);

const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
btn.addEventListener('click', function(e) {
  e.target.style.background = 'blue';
});

// const btn_2 = document.querySelector('#btn-2');
// btn_2.addEventListener('click', () => {
//   alert("Hello World!");
// });

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});



