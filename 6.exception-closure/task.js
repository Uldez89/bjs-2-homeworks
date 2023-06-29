function parseCount(value) {
    let newValue  = Number.parseFloat(value);
     if (Number.isNaN(newValue)) {
         throw new Error('Невалидное значение');
    }
     return newValue;
}

function validateCount(value) {
    try {
    return parseCount(value);
    } catch (error) {
    return  error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(!this.isValidTriangle(a, b, c)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
}
    
    isValidTriangle(a, b, c) {
        return ((a + b) > c && (c + b) > a && (a + c) > b);
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }
    
    get area() {
        let valueForSolution = (this.perimeter / 2) * (this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c);
        let area = Math.sqrt(valueForSolution);
        return Number.parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error){
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }

    }
}
