const express = require('express');
const controller = require('./controller')

//importamos el fichero con los datos que necesita nuestro Router
const {todos} = require('../data/index');


/* Un Router de express es como un switch case de Javascript. Simplemente redirige las peticiones hacia la ruta correcta, si esta existe.
En una aplicacion de express podemos tener tantos Routers como queramos/sean necesarios. Lo habitual cuando se implementa una API REST
es tener un Router por cada "recurso" de la api. Si imaginamos una aplicacion que tiene 3 recursos (User, Todo, Category), deberiamos
tener 3 routers diferentes: userRouter, todoRouter y categoryRouter. */


const todoRouter = express.Router();

todoRouter.get('/todo', controller.getAll);

todoRouter.post('/todo', controller.addNew);
  

/*
En este endpoint, el path contiene una variable llamada id. La syntaxis que utiliza express para estos casos es el simbolo :
Una variable en un path, significa que express recoge el valor que va justo después de /todo/ y lo guarda en una variable dentro del objeto "req"
con el mismo nombre que hemos utilizado en el path.

Ejemplo:
Si con Insomnia o Postman hicisemos una peticion GET a la ruta /todo/12, está será dirigida directamente hasta este endpoint.
*/


todoRouter.get('/todo/:id',  controller.getById);


// MISSING '/todo/:id' PATCH
todoRouter.patch('/todo/:id',  controller.update);


// MISSING '/todo/:id' DELETE
todoRouter.delete('/todo/:id',controller.deleteById);


//exportamos el router para poder 'usarlo' en nuestra app.
module.exports = todoRouter;
