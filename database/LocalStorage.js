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

    static updateTask(idUpdate, newData) {
        let arrayTask = JSON.parse(localStorage.getItem('tasks'));

        arrayTask.forEach((data, index) => {
            if (idUpdate == data._id) {
                arrayTask[index] = newData;
            }
        });

        localStorage.setItem('tasks', JSON.stringify(arrayTask));
    }

    static deleteTask(idDelete) {
        let arrayTask = JSON.parse(localStorage.getItem('tasks'));

        arrayTask.forEach((data, index) => {
            if (idDelete == data._id) {
                arrayTask.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(arrayTask));
    }

}