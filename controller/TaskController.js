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
        this.addEventCancelForm();
        this.addEventFilterTask();
        this.getAllTasks();
    }

    callForm() {
        document.querySelector('#modal-form').style.display = 'block';
    }

    byeForm() {
        document.querySelector('#modal-form').style.display = 'none';
    }

    addEventCancelForm() {
        document.querySelector('.cancel-button').addEventListener('click', this.byeForm);
    }

    addEventCallForm() {
        this.buttonCallForm.addEventListener('click', this.callForm);
    }

    addEventDone(card) {
        card.querySelector('.fa-check').addEventListener('click', (e) => {
            console.log(e);
            let task = JSON.parse(card.dataset.task);
            task._done = (!task._done) ? true : false;
            e.path[0].style.color = (task._done) ? 'green' : 'white';
            card.dataset.task = JSON.stringify(task);

            LocalStorage.updateTask(card.id, task);
        });
    }

    addEventFavorite(card) {
        card.querySelector('.fa-star').addEventListener('click', (e) => {
            let task = JSON.parse(card.dataset.task);
            task._favorite = (!task._favorite) ? true : false;
            e.path[0].style.color = (task._favorite) ? 'yellow' : 'white';
            card.dataset.task = JSON.stringify(task);

            LocalStorage.updateTask(card.id, task);
        });
    }

    addEventFilterTask() {
        document.querySelector('#filter').addEventListener('click', this.filterCards);
    }

    addEventDeleteTask(card) {
        card.querySelector('.fa-trash').addEventListener('click', () => {
            if (confirm('Deseja deletar esta tarefa?')) {

                LocalStorage.deleteTask(card.id);
                console.log(card)
                card.remove();
            }
        });
    }

    addEventSubmitForm() {
        this.taskForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let data = {};
        
            this.fields.forEach((element) => {
                data[element.name] = element.value;
            });
        
            data['id'] = this.generateID();
            let task = this.createTask(data);

            LocalStorage.setTask(task);

            this.byeForm();
            this.createCards(task);
        });
    }

    createTask(data) {
        return new Task(data.id, data.title, data.description);
    }

    getAllTasks() {
        let tasks = LocalStorage.getAllTask();

        if (!tasks) {
            return;
        }

        tasks.forEach((data) => {
            this.createCards(data);
        });
    }

    filterCards() {
        document.querySelectorAll('.lista-cards .card').forEach((e) => {
            let task = JSON.parse(e.dataset.task);
            console.log(e);
            if (!task._favorite) {
                e.style.display = 'none';
            }
        });
    }

    generateID() {
        let id = localStorage.getItem('IDs');

        if (!id) {
            id = 1
        } else {
            parseInt(id++);
        }

        localStorage.setItem('IDs', id);

        return id;
    }

    createCards(data) {
        let card = document.createElement('article');
        card.id = data._id;
        card.setAttribute('class', 'card');
        card.innerHTML = `
            <section class="text">
                <h4 class="title">${data._title}</h4>
                <p class="description">${data._description}</p>
                <span class="created">${data._created}</span>
            </section>
            <section class="icon">
                <p><i class="fa-solid fa-star" style="color:${(data._favorite) ? 'yellow': 'white'}"></i></p>
                <p><i class="fa-solid fa-check" ${(data._done) ? 'green': 'white'}></i></p>
                <p><i class="fa-solid fa-trash fa-1x"></i></p>
            </section>
        `;

        card.dataset.task = JSON.stringify(data);

        this.addEventDeleteTask(card);
        this.addEventDone(card);
        this.addEventFavorite(card);
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
