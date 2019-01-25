/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


//http://localhost1337/Raza/holaMundo
//http://localhost1337/Uusario/registrar

module.exports = {
  holaMundo: (peticion, respuestar) => {
    return respuesta.send('ok')
  },
  buscarPorNombre: async function (req, res) {
    // TENER ACCESO A TODOS LOS MODELOS
    // Body Query
    const parametros = req.allParams();


    // Buscar el usuario con username y password
    // como el que te mando
    var nombreCac = await Raza.find({
      nombre: {'startsWith': parametros.nombre}
    });

    return res.ok(nombreCac);

  },



  login: async (req, res) => {
    const parametros = req.allParams();

    var usuarioLogueado = await Raza.find({
      username: parametros.username,
      password: parametros.password,
    });

    const error = usuarioLogueado.length === 0;
    if (!error) {
      return res.ok(usuarioLogueado[0]);
    } else {
      return res.badRequest({mensaje: 'Usuario Invalido'})
    }
  }


//ESTANDAR RESTFULL

//MODELO:Raza

//Find -> Many Encontrar
//http://localhost:1337/Raza
//METODO HTTP:GET


//Create ->
//http://localhost:1337/Raza
//METODO HTTP:POST
//Parametros


//Update ->Encontrar
//http://localhost:1337/Raza/id
//http://localhost:1337/Raza/10
//METODO HTTP:PUT
//parametros

//Delete
//http://localhost:1337/Raza/id
//http://localhost:1337/Raza/10
//METODO HTTP:DELETE

//Find One by ID
//http://localhost:1337/Raza?nombre=carlos
//http://localhost:1337/Raza/10
//METODO HTTP:GET
}
;


//Query Params parametros de consulta al final del url
//http://localhost:1337/Raza?nombre=Adrian&apellido=eguez
//Al Final
//? empieza
//& se separa
//Todos los metodos HTTP

//Route Params
//Dinamicos
//http://localhost:1337/Raza/1/casa/2/cuarto/4
//Todos los metodos HTTP

// Form Params (Body Paramns)
//Todos los metodos HTTP
//No sirve en el metodo get
//JS
//o formulario HTML

//<form>
//<input type="text" name="nombre"  value ="marco">
//<input type="text" name="apellido"  value ="parco">
//</form>


// Codigo de estado ->status code
//1XX -> Informacion
//2XX -> Exito
//3XX -> Redireccion
//4XX -> Error del cliente
//5XX -> Error del servidor
//

