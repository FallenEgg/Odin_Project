const p = document.createElement('p');
p.style.color = 'red'
p.textContent = "Hey I'm Red!"

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3"

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div"

const p1 = document.createElement('p');
p1.textContent = "ME TOO"

const div = document.createElement('div');
div.appendChild(h1, p1);
div.style.cssText = 'color: blue; background: white';        

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});