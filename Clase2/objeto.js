var parlante = /** @class */ (function () {
    function parlante(bluetooth, radio, pausa, cancionActual, volumen) {
        this.bluetooth = bluetooth;
        this.radio = radio;
        this.pausa = pausa;
        this.cancionActual = cancionActual;
        this.volumen = volumen;
    }
    ;
    parlante.prototype.cancionSucesiva = function () {
        this.cancionActual = this.cancionActual + 1;
    };
    ;
    parlante.prototype.cancionAnterior = function () {
        this.cancionActual = this.cancionActual - 1;
    };
    ;
    parlante.prototype.subirVolumen = function () {
        if (this.volumen < 100 && this.volumen > -1) {
            this.volumen = this.volumen + 1;
        }
        else {
            this.volumen = this.volumen;
        }
    };
    parlante.prototype.bajarVolumen = function () {
        if (this.volumen < 100 && this.volumen > 0) {
            this.volumen = this.volumen - 1;
        }
        else {
            this.volumen = this.volumen;
        }
    };
    return parlante;
}());
var parlante1 = new parlante(true, false, false, 5, 43);
parlante1.bajarVolumen();
console.log(parlante1.volumen);
