class TaskController {

    constructor() {
        this.taskForm = document.querySelector('#form');
        this.fields = document.querySelectorAll('#form [name]');
        this.buttonCallForm = document.querySelector('#add');
        this.listaCards = document.querySelector('.lista-cards');
        this.date = document.querySelector('.date');

        this.updateDateTime();
        this.addEventCallForm();
        this.addEventSubmitForm();
    }

    callForm() {
        document.querySelector('#modal-form').style.display = 'block';
    }

    ByeForm() {
        document.querySelector('#modal-form').style.display = 'none';
    }

    addEventCallForm() {
        this.buttonCallForm.addEventListener('click', this.callForm);
    }

    addEventSubmitForm() {
        console.log('ola')
        this.taskForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let data = {};
        
            this.fields.forEach((element) => {
                data[element.name] = element.value;
            });
        
            let newID = this.generateID();
            let task = this.createTask(newID, data.title, data.description);

            console.log(data);

            data[created] = task.created;
        
            this.byeForm();
            this.createCards(data);
        });
    }

    createTask(data) {
        return new Task();
    }

    generateID() {
        window.id = 0;

        id++;

        return id;
    }

    createCards(data) {
        let card = document.createElement('article');
        card.innerHTML = `
        <article id="a${id}" class="card">
            <section class="text">
                <h4 class="title">${data.title}</h4>
                <p class="description">${data.description}</p>
                <span class="created">${data.created}</span>
            </section>
            <section class="icon">
                <p><i class="fa-solid fa-star"></i></p>
                <p><i class="fa-solid fa-check"></i></p>
                <p><i class="fa-solid fa-trash fa-1x"></i></p>
            </section>
        </article>
        `;
        console.log(this.listaCards);
        this.listaCards.appendChild(card);
    }

    updateDateTime() {
        setInterval(() => {
            let date = new Date().toLocaleDateString('pt-BR', {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
        
            let time = new Date().toLocaleTimeString('pt-BR');
        
            let dateTime = document.querySelector('#bar-header .date');
            dateTime.innerHTML = `${date} - ${time}`;
        }, 1000);
    }

    

}
// window.onload = () => {
//     document.querySelector('.theme').addEventListener('click', onTheme);
// };



// Paínel


// function onTheme() {
//     (document.querySelector('.theme').style.color = 'yellow') ? 'white' : 'yellow';
//     document.querySelector('body').style.backgroundColor = 'black';
//     document.querySelector('#bar-header').style.backgroundColor = 'purple';
//     document.querySelector('#busca-tarefa').style.borderBottom = '1px solid purple';

// }

