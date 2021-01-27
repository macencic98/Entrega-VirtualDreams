//Obtengo los modulos necesarios para desarrollar el servidor:
//Express para crear la app, el cual tiene los métodos para especificar la acción realizada dependiendo el verbo HTTP usado en la petición
//Request nos otorga métodos que nos permiten enviar peticiones a servidores  
//BodyParser nos permite obtener modulos para transformar los datos que se reciben a un formato en particular
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

//Creo app express
const app = express();

//Configuro express para usar body-parser
// como middleware para darl un formato a lo que se recibe y poder procesarlo
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Defino el comportamiento al recibir un POST
//El metodo POST perteneciente al modulo Express permite actuar de acuerdo a si se le realiza un post al servidor en el puerto en el que se esta trabajando
//y recibe un parametro para indicar donde se realizara el post(en este caso en la raiz '/') y otro parametro con una funcion callback que recibe una peticion
//y una respuesta como argumentos( que es a donde el servidor enviará la respuesta a la petición, actua como un stream) 
//Dicha funcion callback definira como actua el servidor para responder a la peticion.
app.post('/', (peticion, respuesta) =>{
    console.log('POST'); ///indica a la consola que se realizo, sirve para ver que anda correctamente del lado del servidor 
    
    //console.log(req.body);
    //Obtengo la cantidad de elementos del JSON y lo asigno a una variable let para que sea utilizada solo en este espacio ya que no la necesito mas adelante
    //Compruebo si hay hasta 3 valores, si es asi, paso a validarlos
    let cant = Object.values(peticion.body).length
    //Compruebo si hay hasta 3 valores, si es asi, paso a validarlos

    if (cant <=3 && validoDatos(peticion.body.apellido,peticion.body.dni,peticion.body.nombre)) {
        //Si se cumplen las condiciones pedidas, ahora el modulo request nos otorga metodos con los cuales podemos hacer peticiones a 
        //otros servidores, otorgandole como parametro la URL a la cual le hacemos el pedido, los datos que le mandamos (XML,JSON,ETC) y una funcion para manejar errores.
        request.post('https://reclutamiento-14cf7.firebaseio.com/personas.json',
            {
                json: {
                    "nombre": peticion.body.nombre || "-",
                    "apellido": peticion.body.apellido,
                    "dni": peticion.body.dni
                }
            }, function(err){
                respuesta.send(err?'Status Code: 500':'Status Code: 201');
                    //Si hubo algun error referido al servidor, emito un codigo de error 500 al cliente
                    //Si la peticion del cliente fue exitosa, le envio un mensaje con el codigo 201
            }
        )
    }
    else {
        //Si en la petición del cliente hubo errores al enviar los datos, envío el codigo de error 400
        respuesta.send('Status Code: 400');
    }
});

function validoDatos(apellido, dni, nombre) {

    //Los campos dni y apellido son obligatorios
    if (dni && apellido) {
        //Los campos apellido y nombre tienen que ser strings, por eso los valido definiendo una expresion regular
        let s = new RegExp("^[A-Za-z]+$");
        if (!s.test(nombre) || !s.test(apellido))
            return false;
        

        let dniString = dni.toString();
        s = new RegExp("^[0-9]{1,10}$")
        //El campo dni no puede exceder los 10 caracteres y deben ser solamente números
        if (!s.test(dniString)) 
            return false;

        //Todo verificado
        return true;
    } else
        return false;
}


//Se define y crea el servidor dejandolo escuchando en el puerto 4000
app.listen(4000, () => {
    console.log('Esperando peticiones en el puerto 4000')
});
