# Entrega-VirtualDreams


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

JSON (JavaScript Object Notation) es un formato ligero de texto que permite el almacenamiento e intercambio de datos y resulta bastante sencillo de leer e interpretar, tanto para el programador como para la computadora. Ejemplo: { “nombre”: “Maxi”, “apellido”: “Cencic”, “edad”: 22, “familia”: [“Padre”, “Madre”, “Hermana”] }
XML (Extensible Markup Language) es un formato de texto que también se utiliza para almacenar e intercambiar datos, pero con un formato más estricto y que lleva más tiempo que procesarlo que JSON. Ejemplo:

### 9.	Explicar brevemente el estándar SOAP

El estándar SOAP (Simple Object Access Protocol) establece cómo dos objetos en procesos diferentes se pueden comunicar mediante el intercambio de datos, el cual se efectúa con la utilización de mensajes SOAP. Dichos mensajes son documentos XML y poseen una estructura definida:
Envelope: raíz de la estructura, por lo tanto, es obligatoria, ya que identifica al mensaje como tal.
Header: permite enviar información sobre cómo se debe procesar el mensaje.
Body: es obligatoria y contiene información sobre la llamada y la respuesta.
Fault: contiene información sobre errores producidos durante el procesamiento y envío del mensaje (desde el emisor al receptor).


### 10.	Explicar brevemente el estándar REST Full


### 11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
