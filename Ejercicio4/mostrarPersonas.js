
const reqprom = require('request-promise');
//pido el modulo request-promise

const urlsearch = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';
//creo una variable donde inserto la URL a ingresar

//a la variable que supone la petición(tambien conocida como options e indican las caracteristicas de la peticion), le indico el verbo HTTP que indica
//el nombre de la petición que se le va a hacer al servidor, también le indico la URL
//a la cual le quiero hacer esa petición, y establezco json en true para que devuelva los datos
//en ese formato
reqprom({method: 'GET', uri: urlsearch, json:true}).//si es posible de efectuar, lo muestro por consola
then(function(response){console.log(response)}).
catch(function(error){console.err(error)});//en caso de error, lo atrapo y muestro por consola 
