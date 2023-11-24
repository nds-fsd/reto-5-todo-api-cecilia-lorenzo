const {todos} = require('../data/index'); 


/* GET
devolver todos los "todos" que hay en el array con formato JSON. */
const getAll = (req, res) => {
    res.json(todos)
};


/* POST
crear un nuevo objeto con estructura {id, text, fecha, done} con los datos que vienen en el BODY de la Request 
y meterlos dentro de el array. el nuevo objeto debe tener como id un numero mas que el numero actual de elementos 
guardados en el array. */
const addNew = (req, res) => {


    todos.push(req.body)
    res.status(201).send(todos)
};


/* GET/:id
Recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
Cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
Buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
Si existe, devolverlo como formato JSON y codigo de status 200. 
Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404. */
const getById = (req, res) => {
    const element = todos.find((todo) => {
      return todo.id === Number(req.params.id)
    });

    if (!element) return res.status(404).send();
    res.status(200).json(element)
  
}


/* PATCH/:id
Recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
Cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
Buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
Si existe, lo ACTUALIZAMOS con los datos del BODY de la Request y lo devolvemos como formato JSON y codigo de status 200. 
Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404. */
const update = (req, res) => {
    const elementIndex = todos.findIndex((todo) => {
      return todo.id === Number(req.params.id)
    });
    
    if (elementIndex === -1) return res.status(404).send();
  
    res.status(200).json(elementIndex)
  }


/* DELETE/:id
Recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
Cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
Buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
Si existe, lo BORRAMOS y devolvemos un codigo de status 204.   
Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404. */
const deleteById =   (req, res) => {
    const elementIndex = todos.findIndex((todo) => {
      return todo.id === Number(req.params.id)
    });
    
    if (elementIndex === -1) return res.status(404).send();
  
    todos.splice(elementIndex, 1)
    return res.json(todos)  
  }



module.exports = {
    getAll,
    addNew,
    getById,
    update,
    deleteById
}