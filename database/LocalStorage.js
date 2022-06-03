class LocalStorage {

    static setTask(data) {
        let arrayTask = JSON.parse(localStorage.getItem('tasks'));

        if (!arrayTask) {
            arrayTask = [];
        }

        arrayTask.push(data);
        localStorage.setItem('tasks', JSON.stringify(arrayTask));
    }

    static getAllTask() {
        let arrayTask = JSON.parse(localStorage.getItem('tasks'));
        return (arrayTask) ? arrayTask : false;
    }

    static deleteTask(idDelete) {
        let arrayTask = JSON.parse(localStorage.getItem('tasks'));
        console.log(idDelete);
        console.log(arrayTask);

        arrayTask.forEach((data, index) => {
            if (idDelete == data._id) {
                arrayTask.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(arrayTask));
    }

}