function Punto(x, y) {
    this.x = x;
    this.y = y;    

    this.suma = function(punto) {
        const nuevoX = this.x + punto.x;
        const nuevoY = this.y + punto.y;
        return new Punto (nuevoX, nuevoY);
    }

    Punto.prototype.toString = function() {
        return `${this.x}, ${this.y}`
    }
}

let p1 = new Punto(9, 2);
let p2 = new Punto(2, 4);

console.log(p1.suma(p2).toString());