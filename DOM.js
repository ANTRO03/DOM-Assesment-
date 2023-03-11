const main = document.querySelector("main");



const html = document.createElement('html');


const jokeONE = "On moday its the start of diarrhea awareness week, it runs until friday"
const jokeTWO = "Why did the scarecrow get a promotion because he was outstanding in his field"
const jokeThree = "What do you call a sad cup of coffee? Depresso"




const template = `
    <section>
     <h1  class="header">My Jokes</h1>
     <p id="Jokes"><ul>
     <li> ${jokeONE}</li>
     <li> ${jokeTWO}</li>
     <li>${jokeThree}</li>
     </ul></p>
    </seciton>
`;

main.innerHTML = template;

const p = document.createElement('p');

p.textContent = "That's all folks!"

main.appendChild(p);


