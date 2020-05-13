const fsPromises=require('fs');
/* const fs=require('express');    instalados  */
/* const fs=require('./fs');    archivos que nosotros creamos*/


let listarArchivo =(base,limite)=>{

    return new Promise((resolve,reject)=>{

       if (Number(base) && Number(limite)) {
        let text='';
        for (let index = 1; index <= limite; index++) {
          
               text+=`${base} * ${index} = ${base*index} \n`;
                
        
        }
        resolve(text)
           
       } else {
           reject('algo salio mal')
           return;
       }

    })



}

 


let crearArchivo =  (base)=>{

    return new Promise((resolve,reject)=>{
        if (!Number(base)) {
          reject(`el valor ${base}  no es un numero`);
            
        } else {
            let text='';
            for (let index = 1; index <= 10; index++) {
              
                   text+=`${base} * ${index} = ${base*index} \n`;
                    
            
            }
           /*  console.log(text); */
            
             fsPromises.writeFile(`tabla-${base}.txt`,text,(err)=>{
                if(err){
                   reject(err)
                   
                }
                else{
                   resolve (`tabla-${base}.txt`);
                }
              
            })  
        }
           
    });

    
    
    }

module.exports ={
    crearArchivo,
    listarArchivo
}