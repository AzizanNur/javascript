//document.createElement()
//document.createTextNode()
//node.appendChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()


const pBaru = document.createElement('p');
const textBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(textBaru);
pBaru.classList.add("p5");
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);
const ul = document.querySelector("section#b ul");
const li = ul.querySelector("li:nth-child(3)");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li);

const pSec = document.querySelector("section#a a");
sectionA.removeChild(pSec);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector("p");

const h2 = document.createElement('h2');
const h2baru = document.createTextNode('ini judul baru');
h2.appendChild(h2baru);

sectionB.replaceChild(h2, p4);

// addEventListener
const pargf4 = document.querySelector(".p4");
pargf4.addEventListener('click', function(){
    const parentUl = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const liBaruAdd = document.createTextNode("Element Baru");
    liBaru.appendChild(liBaruAdd);
    parentUl.appendChild(liBaru);
    console.log(parentUl); 
});


