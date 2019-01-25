/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


//htttp://localhost:1337/Raza/holaMundo
//htttp://localhost:1337/Usuario/registrar

module.exports = {
   holaMundo: function(peticion, respuesta){
        return respuesta.send('OK');
   },

  buscarPorNombre: async function(req, res){
     const parametros= req.allParams();
     var nombrePequena= await Raza.find(
      //{nombre:'Pequena'}
      {nombre : {'startsWith':parametros.nombre}}
    );
    return res.ok(nombrePequena)
  }
};

