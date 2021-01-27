const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

//Creo app express
const app = express();

//Configuro express para usar body-parser
// como middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Defino el comportamiento al recibir un POST
app.post('/', (req, res) =>{
    console.log('POST');
    //console.log(req.body);
    //Obtengo la cantidad de elementos del JSON y lo asigno a una variable let para que sea utilizada solo en este espacio ya que no la necesito mas adelante
    //Compruebo si hay hasta 3 valores, si es asi, paso a validarlos
    let cant = Object.values(req.body).length
    //Compruebo si hay hasta 3 valores, si es asi, paso a validarlos

    if (cant <=3 && validoDatos(req.body.apellido,req.body.dni,req.body.nombre)) {
        request.post('https://reclutamiento-14cf7.firebaseio.com/personas.json',
            {
                json: {
                    "nombre": req.body.nombre || "-",
                    "apellido": req.body.apellido,
                    "dni": req.body.dni
                }
            }, function(err){
                res.send(err?'Status Code: 500':'Status Code: 201');
                    //Si hubo algun error referido al servidor, emito un codigo de error 500 al cliente
                    //Si la peticion del cliente fue exitosa, le envio un mensaje con el codigo 201
            }
        )
    }
    else {
        //Si en la petición del cliente hubo errores al enviar los datos, envío el codigo de error 400
        res.send('Status Code: 400');
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

//Se deja el servidor a la espera de peticiones
app.listen(4000, () => {
    console.log('Esperando peticiones en el puerto 4000')
});