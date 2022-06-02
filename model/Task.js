class Task {

    constructor(id, title, description, done = false, favorite = false) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._created = this.createdDate();
        this._done = done;
        this._favorite = favorite;
    }

    get id() {
        return this._id;   
    }

    get title() {
        return this._title;   
    }

    get description() {
        return this._description;   
    }

    get done() {
        return this._done;   
    }

    get favorite() {
        return this._favorite;   
    }

    set id(value) {
        this._id = value;   
    }

    set title(value) {
        this._title = value;   
    }

    set description(value) {
        this._description = value;   
    }

    set done(value) {
        this._done = value;   
    }

    set favorite(value) {
        this._favorite = value;   
    }

    get created() {
        return this._created;
    }

    createdDate() {
        let date = new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).concat(` às ${new Date().toLocaleTimeString('pt-BR')}`);

        return date;
    }
}