const argv = require('./config/yargs').argv;
const {crearArchivo,listarArchivo}= require('./multiplicar/multiplicar')
const  colors = require('colors');
const comando=argv._[0];


switch(comando){
    case 'listar':
       listarArchivo(argv.base,argv.limite).then(data=>console.log(data.green));
        break;
    case 'crear':
       
        crearArchivo(argv.base,argv.limite).then(archivo=>console.log(`el archivo creado: ${archivo} `.rainbow)).catch(err=>console.log(err))
         break;
    default:
        console.log('No existe el comando lo siento');
    
    }


