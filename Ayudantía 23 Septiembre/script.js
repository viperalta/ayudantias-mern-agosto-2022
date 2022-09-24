//POO

PRESUPUESTO_EMPRESA = 6000; 
MONTO_BONO = 500;

class Trabajador{

    constructor (nombre,edad,sueldo){
        this.nombre=nombre;
        this.edad=edad;
        this.billetera=0;
        this.sueldo=sueldo;
    }

    saludar(){
        console.log("El trabajador "+this.nombre+" dice HOLA!")
        return this;
    }


}

const trabajador1 = new Trabajador("Alvaro",30,2000);

console.log(trabajador1.saludar());

class Desarrollador extends Trabajador{
    
    constructor(nombre,edad,sueldo){
        super(nombre,edad,sueldo);
        this.metasMensuales=0;
    }

    cumplirMetas(metasCumplidas){
        this.metasMensuales+=metasCumplidas;
    }
}

const desarrollador1 = new Desarrollador("Carlo",30,5000);

console.log(desarrollador1);

desarrollador1.cumplirMetas(4);

console.log(desarrollador1);

class Contador extends Trabajador{

    constructor(nombre,edad,sueldo){
        super(nombre,edad,sueldo)
    }

    pagarSueldo(trabajador){
        if(PRESUPUESTO_EMPRESA<trabajador.sueldo){
            console.log("La empresa no tiene suficientes fondos para pagarle a "+trabajador.nombre);
        }else{
            console.log("Se le ha pagado satisfactoriamente a "+trabajador.nombre);
            trabajador.billetera+=trabajador.sueldo;
            PRESUPUESTO_EMPRESA-=trabajador.sueldo;
            if(trabajador.metasMensuales>=3){
                console.log("El trabajador ha ganador un bono extra de" + MONTO_BONO);
                trabajador.billetera+=MONTO_BONO;
                PRESUPUESTO_EMPRESA-=MONTO_BONO;
            }
        }
    }

}

const contador1 = new Contador("Dani",30,2000);
console.log(contador1);

console.log("ANTES DEL PAGO", desarrollador1)
contador1.pagarSueldo(desarrollador1);
console.log("DESPUES DEL PAGO DEL PAGO", desarrollador1)
//console.log(desarrollador1);
console.log(PRESUPUESTO_EMPRESA);

contador1.pagarSueldo(desarrollador1);

//Herramientas poderosas:
//.map, .filter, forEach, .some