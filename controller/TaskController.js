let painelCards = document.querySelector('.cards');
let buttonAddCard = document.querySelector('.add');
let dataCard = {};
let cardForm = document.querySelector('.card-form');
let form = document.querySelector('#form');
let fields = document.querySelectorAll('#form [name]');
let idCards = 0;


class TaskController {

    constructor() {
        this.taskForm = document.querySelector('#form');
        this.buttonCallForm = document.querySelector('#call-form');
        this.modalForm = document.querySelector('#modal-form');

        this.addEventCallForm();
    }

    callForm() {
        //cardForm.style.display = 'block';
        this.modalForm.style.display = 'block';
    }

    ByeForm() {
        //cardForm.style.display = 'none';
        this.modalForm.style.display = 'none';
    }

    addEventCallForm() {
        this.buttonCallForm.addEventListener('click', this.callForm);
    }

    formSubmit() {

    }

    createTask(data) {
        let task = new Task();
    }

    createCards(data) {
        idCards++;
        let card = document.createElement('article');
        card.innerHTML = `
        <article id="a${idCards}" class="card">
            <section class="text">
                <h4 class="title">${data.title}</h4>
                <p class="description">${data.description}</p>
                <span class="data">${data.date} às ${data.time}</span>
            </section>
            <section class="icon">
                <p><i class="fa-solid fa-star"></i></p>
                <p><i class="fa-solid fa-check"></i></p>
                <p><i class="fa-solid fa-trash fa-1x"></i></p>
            </section>
        </article>
        `;
        painelCards.appendChild(card);
    }
}
// window.onload = () => {
//     document.querySelector('.theme').addEventListener('click', onTheme);
// };


buttonAddCard.addEventListener('click', callForm);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    fields.forEach((element, index) => {
        dataCard[element.name] = element.value;
    });

    dataCard.date = new Date().toLocaleDateString('pt-BR', {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    dataCard.time = new Date().toLocaleTimeString('pt-BR');

    byeForm();

    createCards(dataCard);
});

// Paínel
function updateDateTime() {
    let date = new Date().toLocaleDateString('pt-BR', {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    let time = dataCard.time = new Date().toLocaleTimeString('pt-BR');

    let dateTime = document.querySelector('#bar-header .hour');
    dateTime.innerHTML = `${date} - ${time}`;
}

// function onTheme() {
//     (document.querySelector('.theme').style.color = 'yellow') ? 'white' : 'yellow';
//     document.querySelector('body').style.backgroundColor = 'black';
//     document.querySelector('#bar-header').style.backgroundColor = 'purple';
//     document.querySelector('#busca-tarefa').style.borderBottom = '1px solid purple';

// }

setInterval(updateDateTime, 1000);