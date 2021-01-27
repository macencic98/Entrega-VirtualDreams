# Entrega-VirtualDreams

## Ejecución del programa
### Ejercicio 3
Para ejecutar el ejercicio 3, deben seguirse los siguientes pasos:
1) Abrir la consola (CMD).
2) Copiar la ruta del archivo a ejecutar (en este caso el mismo será mostrarPersonas). También otra alternativa es recorrer directorios utilizando el comando "cd" seguido del directorio disponible dentro del cual estamos, hasta llegar al directorio donde se encuentra el archivo que queremos ejecutar. 
3) Instalar los módulos node que necesitamos (si es que no los instalamos previamente). Los mismos son los módulos request y request-promise. Para instalarlos se deben utilizar los comandos: "npm install request" y "npm install request-promise".
4) Una vez instalados los módulos, se procede a la ejecución del mismo. Para ello, utilizamos el comando "node mostrarPersonas".


### Ejercicios 5 y 6
Ambos ejercicios deben ser ejecutados al mismo tiempo para observar que funcionan. 
1) Abrir la consola (CMD).
2) Copiar la ruta del archivo a ejecutar (en este caso el mismo será servidorJS). También otra alternativa es recorrer directorios utilizando el comando "cd" seguido del directorio disponible dentro del cual estamos, hasta llegar al directorio donde se encuentra el archivo que queremos ejecutar. 
3) Instalar los módulos node que necesitamos (si es que no los instalamos previamente). Los mismos son los módulos request y request-promise. Para instalarlos se deben utilizar los comandos: "npm install express" y "npm install request".
4) Una vez instalados los módulos, se procede a la ejecución del mismo. Para ello, utilizamos el comando "node servidorJS".
5) Abrimos el archivo HTML, el cual nos dirigirá a una WEB con campos a rellenar.
6) Rellenar los campos y presionar "Enviar".
7) Observar que si todo sale correctamente, la página web mostrará el código "201", lo que significa que se enviaron los datos que se ingresaron. Además la consola mostrará un mensaje indicando que se realizó un POST.


## Ejercicio2 


### 1.	¿Qué es un servidor HTTP? 

Un servidor HTTP corresponde a un determinado tipo de software que, al realizar procesamientos del lado del servidor, se comunica estrechamente con el cliente enviándole respuestas bajo el protocolo HTTP a sus peticiones, las cuales pueden ser documentos o aplicaciones que luego son renderizadas por el navegador web del cliente.

### 2.	¿Qué son los verbos HTTP? Mencionar los más conocidos

Los verbos HTTP son métodos de petición que indican una acción que se quiere realizar con un recurso determinado. Algunos de los más conocidos son GET, PUT, POST, DELETE, OPTIONS y PATCH.


### 3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?

Un request representa la petición que realiza el cliente de la comunicación para con el servidor solicitando realizar determinada acción, mientras que el response refiere a la respuesta que realiza el servidor HTTP a la petición del cliente. 
Los headers HTTP nos brindan información adicional a la comunicación ya sea de request o response, como por ejemplo pueden ser el tipo de dato que se debe responder y el formato de los datos que se envían. Poseen una estructura del tipo “nombre: valor”.


### 4.	¿Qué es un queryString? (En el contexto de una url)

Una query string es una parte de la URL que comienza a partir del carácter ‘?’ y sirve para pasar información (parámetros) dentro de la misma URL. Puede tener uno o varios parámetros cada uno separados por el carácter ‘&’ y estos pueden ser distintos tipos de información tales como consultas o información del sitio web en cuestión.


### 5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?

El ResponseCode es un código que envía el servidor HTTP que indicará el estado de la petición que realizó el cliente, indicando si una petición fue completada correctamente o no.
 
Los posibles valores para el ResponseCode son: 

1XX: Respuestas informativas. La petición fue recibida y se encuentra en proceso. Ejemplos: 101 (Continue), 101 (Switching Protocols).

2XX: Respuestas de Éxito. La petición se recibió, interpretó y procesó correctamente. Ejemplos: 200 (OK), 201 (Created).
3XX: Respuestas de redirección: Es necesario realizar más acciones para continuar con la petición. Ejemplos: 301 (Moved Permanately), 304 (Not modified).

4XX: Respuestas de error por parte del cliente. La petición recibida no se pudo procesar a causa de un error por parte del cliente. Ejemplos: 401 (Unauthorized), 404 (Not Found).

5XX: Respuestas de error por parte del servidor. La petición recibida no se pudo procesar a causa de un fallo en el servidor. Ejemplos: 500 (Internal Server Error), 502 (Bad Gateway).


### 6.	¿Cómo se envía data en un Get y cómo en un POST? 

En un GET, los datos se envían haciendo uso de la URL, escribiéndolos en forma de parámetros luego del símbolo “?”, con formato nombre = valor y cada uno separado por el símbolo “&”.
 Por otro lado, en un POST, el envío de datos se realiza con el mismo formato del GET pero introduciendo los parámetros en la solicitud HTTP para el servidor, de manera tal que está oculto para el usuario.
En un GET se solicita la representación de un recurso especificado. 


### 7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
El verbo que se utiliza al acceder a una página web es GET ya que en la petición solicitamos los datos necesarios para mostrar dicha página.


### 8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.

JSON (JavaScript Object Notation) es un formato ligero de texto que permite el almacenamiento e intercambio de datos y resulta bastante sencillo de leer e interpretar, tanto para el programador como para la computadora. Es comúnmente utilizado para transmitir datos en aplicaciones web. La utilidad del JSON es la de poder recibir un objeto
en forma de texto y luego transformarlo en el objeto original cuando se recibe a través del acceso a los campos. Ejemplo:
{ “universidad”: "UNLAM",
"carrera": "Ingenieria en Informatica",
"materia": "Base de Datos"}

XML (Extensible Markup Language) es un formato de texto que también se utiliza para almacenar e intercambiar datos, pero con un formato más estricto y que lleva más tiempo que procesarlo que JSON. El intercambio de datos como XML reduce la dificultad de transmitir información en formatos incompatibles porque los datos pueden ser leídos por diferentes aplicaciones incompatibles entre sí.Ejemplo:

<?xml version="1.0" encoding="UTF-8"?>
    <persona>
        <nombre>Maxi</nombre>
        <edad>22</edad>
       </persona>

### 9.	Explicar brevemente el estándar SOAP

El estándar SOAP (Simple Object Access Protocol) establece cómo dos objetos en procesos diferentes se pueden comunicar mediante el intercambio de datos, el cual se efectúa con la utilización de mensajes SOAP. Dichos mensajes son documentos XML y poseen una estructura definida:
Envelope: raíz de la estructura, por lo tanto, es obligatoria, ya que identifica al mensaje como tal. 

Header: permite enviar información sobre cómo se debe procesar el mensaje.
Body: es obligatoria y contiene información sobre la llamada y la respuesta.
Fault: contiene información sobre errores producidos durante el procesamiento y envío del mensaje (desde el emisor al receptor).

Ejemplo obtenido de internet:
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
     <getProductDetails xmlns="http://warehouse.example.com/ws">
       <productId>827635</productId>
     </getProductDetails>
   </soap:Body>
</soap:Envelope>


### 10.	Explicar brevemente el estándar REST Full
El estándar Restful hace referencia a una API ( una forma de describir el intercambio de datos entre aplicaciones/sitios web usualmente a través de JSON/XML) ya construida con protocolo HTTP realizada con el estándar REST, el cual es una lógica de restricciones y recomendaciones sobre la cual se puede construir una API (se podría decir que es un tipo de arquitectura). Entonces si se implementa una API con la arquitectura REST, se puede decir que tenemos una restful API.


### 11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers en un request contienen información en formato de parámetros que envía el cliente al realizar una petición. El key Content-Type en un header es una propiedad utilizada para indicar el tipo de contenido o formato del dato que se está enviando. Ejemplo: Content-Type: image/jpg
