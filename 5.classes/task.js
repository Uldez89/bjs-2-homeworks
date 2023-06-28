class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }
  
    
    set state(value) {

        if (value < 0) {
            this._state = 0;
        } else if (value > 0) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    
    get state() {
        return this._state;
    }

}