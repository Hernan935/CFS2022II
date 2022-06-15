class parlante{
    bluetooth:boolean;
    radio:boolean;
    pausa:boolean;
    cancionActual:number;
    volumen:number;

    constructor(bluetooth:boolean,radio:boolean,pausa:boolean,cancionActual:number,volumen:number){
        this.bluetooth=bluetooth;
        this.radio=radio;
        this.pausa=pausa;
        this.cancionActual=cancionActual;
        this.volumen=volumen;
    };

    cancionSucesiva(){
        this.cancionActual=this.cancionActual+1;
    };

    cancionAnterior(){
        this.cancionActual=this.cancionActual-1;
            }; 

    subirVolumen(){
        if(this.volumen<100 && this.volumen>-1){
            this.volumen=this.volumen+1
        } else {
            this.volumen=this.volumen
        }
    }
    
    bajarVolumen(){
        if(this.volumen<100 && this.volumen>0){
            this.volumen=this.volumen-1
        } else {
            this.volumen=this.volumen
        }
    }
}

let parlante1=new parlante(true,false,false,5,43);
parlante1.bajarVolumen()
console.log(parlante1.volumen);
