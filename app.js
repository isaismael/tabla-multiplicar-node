const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log( argv );


//argv son los argumentos que viene por consola
//console.log(process.argv);

//aca se extrae la base, que por consola estaba en 3 posicion, entonces hacemos uns desctructuracion
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// const base = 6;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch(err => console.log(err));