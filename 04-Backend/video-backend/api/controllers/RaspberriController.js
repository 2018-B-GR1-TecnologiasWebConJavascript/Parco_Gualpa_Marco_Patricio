/**
 * RaspberriController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  saludo : (req,res)=>{
    const parametros = req.allParams();
    const url = 'http://localhost:1338/board/saludo';
    const saludo ={
      saludo:parametros.saludo
    };

    try{
      const respuestaRaspberri =await axios.post(url,saludo);
      return res.ok(respuestaRaspberri);
    }catch (e) {
      res.serverError({error:500, mewnsaje:'Error en el servidor'})
    }
  }

};

